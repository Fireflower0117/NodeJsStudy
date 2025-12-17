/* 아래 코드는 파일을 읽은후 gzip 방식으로 파일을 압축하는 코드이다.  */
const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./2_1_4_readme.txt');
const zlibStream = zlib.createGzip();

const writeStream = fs.createWriteStream('2_2_1_readme.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_2_1_gzip.js
   2_2_1_readme.txt.gz 생성

  노드에서는 파일을 압축하는 zlib 모듈을 제공합니다. 이책에서는 많이 다루지는 안는다.
  zlib의 createGzip() 메서드가 스트림을 지원하므로 readStream, writeStream 중간에 파이핑(piping)할수있다.
  버퍼 Data가 전달되다가 gzip압축을 거친후 파일로 써진다.

*/