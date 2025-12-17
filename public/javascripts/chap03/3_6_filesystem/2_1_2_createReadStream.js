const fs = require('fs');

const readStream = fs.createReadStream('./2_1_2_readme.txt', {highWaterMark: 16}); // 1)
const data= [];

readStream.on('data', (chunk) => { // 2_1)
    data.push(chunk);
    console.log('data : ', chunk , chunk.length);
});

readStream.on('end', () =>{ // // 2_2)
   console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err) => { // 2_3)
    console.log('error : ', err);
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_1_2_createReadStream.js
data :  <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
data :  <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
data :  <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b> 16
data :  <Buffer 88 eb 8b a4 2e 20 eb 82 98 eb 88 a0 ec a7 84 20> 16
data :  <Buffer ec a1 b0 ea b0 81 ec 9d 84 20 63 68 75 6e 6b eb> 16
data :  <Buffer 9d bc ea b3 a0 20 ed 95 a9 eb 8b 88 eb 8b a4 2e> 16
end 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 합니다.


1) 먼저 fs.createReadStream()의 첫번쨰 인수로 읽을 대상파일을 지정한다.
   두번쨰인수는 옵션인데 highWaterMark옵션이 버퍼의 크기를 정할수있는 옵션이다.
   기본값은 64Kb이지만 여러번 나눠서 전송하는걸 보여주기위해 16byte로 설정한것이다.

2) readStream은 이벤트 리스너를 등록해서 사용한다.  보통 data, end, error 이벤트를 사용한다.
   2_1) 읽기가 완료되면(버퍼의 크기만큼 읽으면) 동작하는 이벤트다.
   2_2) 지정한 파일을 다읽으면 end 이벤트가 동작한다.
   2_3) 파일을 읽는중 에러가 발생하면 동작하는 이벤트다.

   버퍼의 기본값이 64Kb이기 때문에 대부분의 txt파일들은 한번에 전송된다.
*/
