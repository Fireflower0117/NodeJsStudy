/* 노드에서 버퍼를 직접 다룰수있는 객체가 있다.  바로 Buffer 객체다.  */

const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');
console.log('from()  : ', buffer);
console.log('length : ', buffer.length);
console.log('toString(): ', buffer.toString());

const bufArr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const arrBuffer = Buffer.concat(bufArr);
console.log('concat() : ', arrBuffer.toString());

const bufAlloc = Buffer.alloc(5);
console.log('alloc() : ', bufAlloc);

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_1_1_buffer.js
from()  :  <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b3 b4 ec 84 b8 ec 9a 94 2e>
length :  33
toString():  저를 버퍼로 바꿔보세요.
concat() :  띄엄 띄엄 띄어쓰기
alloc() :  <Buffer 00 00 00 00 00>

Buffer 객체는 여러가지 함수를 제공한다 

   from(문자열) : 문자열을 버퍼로 바꿀수있다. length속성은 버퍼의 크기을 나타낸다.\
   toString(버퍼) : 버퍼를 다시 문자열로 바꿀수 있다. 이때 base64나 hex를 인수로 넣어 인코딩 변환도 가능하다.
   concat(배열) : 매열안에 요소를 하나의 버퍼로 합친다.
   alloc( [바이트] ) : 빈 버퍼를 생성한다. 인수로 바이트(length)를 넣으면 바이트 크기의 버퍼가 생성된다.

   readFile이 편리하긴 하지만 문제점도 있다. 만약 100Mb파일을 읽어야 한다면 메모리도 100Mb버퍼를 만들어야 한다.
   이런작업을 10개만 해도 1Gb의 메모리가 소비된다. 웹환경에서 여러명이 동시에 작업을 수행하면
   서버의 메모리 문제가 발생할수 있다.

   또 모든 내용을 읽어야만 다음 동작으로 넘어가기떄문에 읽기 쓰기등의 조작을 해번할때 마다 버퍼로 처리완료해야
   다음동작을 수행할수있다.  그래서 버퍼의 크기를 작게 만들고 어러번에 걸쳐 나눠보내는 방식이 등장했다.
   만약 1Mb의 버퍼를 만든후 100Mb파일을 100번에 걸쳐 수행하는 방식이다. 이로써 1Mb로 100Mb의 파일을 전송할수있다.
   이렇게 만든형식이 스트림(Stream)이다.

 */
