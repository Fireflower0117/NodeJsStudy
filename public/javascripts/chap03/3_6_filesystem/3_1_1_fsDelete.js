/* 이번에는 폴더내용을 확신 / 삭제하는 방법을 알아본다. */

const fs = require('fs').promises;

fs.readdir('./3_1_1_filesystem') // 1)
    .then((dir) => {
        console.log('폴더내용 확인 : ', dir);
        return fs.unlink('./3_1_1_filesystem/file_new.js')
    })
    .then( () => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./3_1_1_filesystem');
    })
    .then( () => {
        console.log('파일삭제 성공');
    })
    .catch ((err) => {
        console.error(err);
    });

/*
{projecthome}\public\javascripts\chap03\3_6_filesystem> node .\3_1_1_fsDelete.js
폴더내용 확인 :  [ 'file_new.js' ]
파일 삭제 성공
파일삭제 성공

1) fs.readdir(경로,콜백)
   폴더안에 파일/폴더 내용을 확인할수있다. 내용은 배열(array) 형태로 나온다.

2) fs.unlink(경로, 콜백)
   파일을 지울수있다. 파일이나 폴더가 없다면 에러가 발생하므로 먼저 파일이 있는지 꼭 확인해야한다.

3) fs.rmdir(경로, 콜백)
    파일/폴더를 지울수있다. 폴더를 삭제할땐 폴더안에 파일이나/하위폴더가 있으면 에러가 발생한다.
    폴더를 삭제하기전에는 반드시 파일이나/하위폴더를 전부 삭제해야한다.


{projecthome}\public\javascripts\chap03\3_6_filesystem> node .\3_1_1_fsDelete.js
한번더 수행하면 ENOENT에러가 발생한다. 이미 폴더를 삭제해서 폴더가 없기떄문이다.  
 */