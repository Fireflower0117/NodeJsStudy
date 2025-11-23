// 파일시스템의 참조는  require('fs');로 가져올수있다.
let fs = require('fs');

// 파일을 작성하려면 fs.write(filename, data , encoding [, callback] )를 사용한다.
fs.writeFile('./example.txt', 'Hello World', encoding='utf-8',
    function (err){
       if(err) throw err;
       console.log('파일을 작성했습니다.');

        // 파일명을 변경하려면 fs.rename(path1, path2 [, callback] )함수를 사용한다.
        // path1은 변경할 대상파일이고 , path2는 변경할 새로운 파일명이다. callback함수는 생략 가능하다.
        fs.rename('./example.txt', './testDemo.txt', function(err){
            if ( err ) throw err;
            console.log('파일명을 변경했습니다.');

            // fs.stat(path [, callback])은 파일의 정보를 확인하는 함수다.
            // path는 대상파일이다. callback 함수의 매개변수는 (err , stats) 이다.
            fs.stat('./testDemo.txt', function(err, stats){
                if (err) throw err;
                console.log('isFile : %s', stats.isFile());
                console.log(stats);
            }); // stats End
        });  // Rename End
    }); // write End



