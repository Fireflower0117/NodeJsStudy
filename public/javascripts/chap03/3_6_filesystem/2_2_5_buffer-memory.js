/* readFile메서드를 사용해 2_2_4_BigFile.txt를 2_2_4_BigFile2.txt로 복사해본다 */

const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./2_2_4_BigFile.txt');
fs.writeFileSync('./2_2_4_BigFile2.txt', data1);
console.log('buffer : ', process.memoryUsage().rss);

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_2_5_buffer-memory.js
   before :  36315136
   buffer :  1027330048

   처음에 36Mb였던 버퍼가 순식간에 1Gb가 넘었습니다.
   1Gb용량의 파일을 복사하기위해 메모리에 파일을 모두 올려둔후 writeFileSync를 수행했기떄문입니다.
 */