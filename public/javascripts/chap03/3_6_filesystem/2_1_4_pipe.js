/* fs.createReadStream으로 파일을 읽어 fs.createWriteStream에 데이터를 전달해서 파일을 생성할수도있다.
   이때 스트림끼리 연결하는것을 파이핑(Piping) 이라고 한다.  (Pipe = 연결통로)
*/

const fs = require('fs');

const readStream = fs.createReadStream('./2_1_4_readme.txt');
const writeStream = fs.createWriteStream('./2_1_4_writeme.txt');
readStream.pipe(writeStream);

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_1_4_pipe.js
   생성된 2_1_4_writeme.txt파일을 더블클릭하여 열어본다.

   미리 읽기, 쓰기 스트림을 생성한후 두개의 스트림사이를 pipe 메서드로 연결하면 저절로
   data가 writeStream으로 넘어간다. 따로 on('data') 이벤트 리스너를 호출하지 않아도
   알아서 data를 전달하므로 편리하다.  노드 8.5버전 이전까지는 이방식으로 파일을 복사하곤 했다.
   새로운 파일 복사방식은 나중에 학습해보기로 한다. 
 */