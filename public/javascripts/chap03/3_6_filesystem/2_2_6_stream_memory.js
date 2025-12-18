/* 이번에는 스트림을 이용해 2_2_6_BigFile.txt로 복사해봅니다. */

const fs = require('fs');
console.log('before : ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./2_2_4_BigFile.txt');
const writeStream = fs.createWriteStream('./2_2_6_BigFile.txt');
readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('stream : ', process.memoryUsage().rss);
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_2_6_stream_memory.js
before :  36417536
stream :  65658880

  스트림을 이용해 파일을 복사했더니 메모리를 62Mb정도 사용했습니다.
  이전방식이 1Gb용량을 차지했던것과 비교하면 많은 개선효과 입니다.
  큰파일을 작은 버퍼단위로 조각(chunk)내어 버퍼단위로 옮겼기 때문입니다.
  이렇게 스트림을 사용하면 효과적으로 데이터를 전송할수있습니다.
*
* */
