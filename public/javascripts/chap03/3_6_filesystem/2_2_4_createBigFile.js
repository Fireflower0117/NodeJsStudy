/* 다음은 1Gb 용량의 텍스트를 만드는 코드이다.
*  실행전에 현재 드라이브의 여유공간이 충분한지 확인후 여유공간이 있으면 실행해보자
*  수행하는데 시간이 조금 걸릴수도 있다.
*  */

const fs = require('fs');
const file = fs.createWriteStream('./2_2_4_BigFile.txt');
for(let i = 0 ; i <= 10000000; i++){
    file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼것입니다. 각오 단단히 하세요 \n');
}
file.end();

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_2_4_createBigFile.js
*
* */