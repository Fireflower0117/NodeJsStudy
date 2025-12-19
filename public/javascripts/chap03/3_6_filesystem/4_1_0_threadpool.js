/* 비동기 메서드는 백그라운드에서 실행되고, 실행외 완료되면 MainThread에 콜백함수나 Promises의 then이 수행된다.
   이전에 fs를 여러번 수행해도 백그라운드에서 동시에 수행되는 이유가 바로 ThreadPool이 있기 때문이었다.

   fs외에도 내부적으로 TheadPool을 사용하는 모듈로 crypto, zlib, dns, lookup 등이 있다.
*  ThreadPool을 쓰는 crypto.pbkdf2메서드로 ThreadPool의 존재를 확인해본다.
*
**/

const crypto = require('crypto');
const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('1 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('2 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('3 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('4 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('5 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('6 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('7 : ', Date.now() - start);
});

crypto.pbkdf2(pass , salt , 1000000, 128, 'sha512', () => {
    console.log('8 : ', Date.now() - start);
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\4_1_0_threadpool.js
2 :  2132
3 :  2194
4 :  2347
1 :  2397
5 :  4333
6 :  4438
7 :  4544
8 :  4638

 실행할때마다 결과와 순서가 달라진다.  ThreadPool이 Background에서 동시에 작업을 수행하고
 수행결과가 끝나는대로 console.log를 수행했기 때문이다.

 하지만 하나의 규칙을 발견할수있다. 1~4 , 5~8까지 그룹으로 묶여있고, 5~8보다 1~4가 먼저 수행된다는 점이다.
 바로 기본적인 ThreadPool의 개수가 네개이기 때문이다.
 ThreadPool이 네개이므로 처음 네개작업(1~4)이 동시에 수행되고 그것들이 종료되면 다음 네개작업(5~8)이 수행된다는 점이다.
 수행하는PC(서버)의 코어개수가 4개보다 작으면 다른결과가 생길수도있다.

 ThreadPool으리 수행을 직접 컨트롤 할수는 없지만 Pool의 Thread개수는 조절할수있다.
 Window = SET UV_THREADPOOL_SIZE = 1
 리눅스,MAX = UV_THREADPOOL_SIZE = 1

 ex) {projecthome}\public\javascripts\chap03\3_6_filesystem> SET UV_THREADPOOL_SIZE=1




*
*  */

