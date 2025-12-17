const fs = require('fs');

const writeStream = fs.createWriteStream('./2_1_3_writeme.txt'); // 1)
writeStream.on('finish', () => {  // 2)
   console.log('파일쓰기 완료');
});

writeStream.write('이글을 씁니다. \n');  // 3)
writeStream.write('한번더 씁니다.');
writeStream.end(); // 4) 파일쓰기 완료

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_1_3_createWriteStream.js
파일쓰기 완료

생성된 2_1_3_writeme.txt파일응 더블클릭하여 열어본다.
스크립트에 넣었던 (writeStream.write ) 내용이 들어있다.

1) 먼저 fs.createWriteStream() 으로 쓰기 스트림을 생성한다.
   첫번째 인수로 생성할 파일의 위치와 이름을 지정한다.
   두번쨰 인수는 옵션인데 여기서는 사용하지 않았다.

2) writeStream.on('finish') 이벤트 리스너는 파일 쓰기가 종료되면 동작하는 함수이다.
3) writeStream 버퍼에 내용을 입력한다.
4) writeStream에 쓰기완료(  writeStream.end() );
   쓰기가 완료되면  writeStream.on('finish') 이벤트 리스너가 동작 한다.



* */
