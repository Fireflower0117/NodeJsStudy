/* 노드 8.5버전 이후에는 createReadStream , createWriteStrem을 pipe하지 않아도 파일을 복사할수있다.  */
const fs = require('fs').promises;

fs.copyFile('./2_1_4_readme.txt', './3_1_2_writeme_rename.txt')
    .then( () => {
        console.log('복사 완료');
    })
    .catch( (error) => {
        console.error(error);
    });

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\3_1_2_copyFile.js
복사 완료

2_1_4_readme.txt와 동일한 내용의  3_1_2_writeme.txt가 생성되었다.
첫번쨰 인수로 복사할 대상파일을 지정하고, 두번쨰 인수로 복사될 파일경로를 지정한다.
세번쨰인수는 복사후 콜백 함수를 넣는다.

 */