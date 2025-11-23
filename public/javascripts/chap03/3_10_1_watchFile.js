var fs = require("fs");
fs.watchFile('./testDemo.txt'
        , {persistent: true, interval : 500}
        , function(curr, prev){
            console.log('현재파일의 수정시간 : '+curr.mtime);
            console.log('이전파일의 수정시간 : '+prev.mtime);
            //console.dir(prev, { depth: null, showHidden: true });
            // 객체의 속성을 깊이 볼떄 console.log사용한다.

            // 2번째 매개변수인 options는 생략가능하다.
            // option의  persistent(영속성)의값은 기본(default)값은 true이다.
            // persistent가 false일경우 (파일변경이후 바로 프로세스는 종료된다.)
            // interval은 inotify를 이용할수없을떄 특정주기별로 파일의 변경유무를 자동체크하는 주기이다.
            // 단위는 milli Seconds 단위이다. (1sec = 1000ms : 0.5Sec = 500ms )

            console.log( Object.getOwnPropertyNames(prev));
            // 객체의 속성을 깊이 볼떄 Object.getOwnPropertyNames 사용한다.
            // 참고로 Object.getOwnPropertyNames는 javascript 내장함수이다.
            // node.js는 ECMAscript(ES5)표준을 준수한다.
            // 그래서 javascript 객체, 속성, 함수를 전부 사용가능하다.

    }
);

// watchFile함수는 파일의 변경이 발생하는 시점에 Event를 발생시키는 함수이다.
// 파일의 수정내용이나 변경시간 등을 알수있다.

// 솔루션 프로그램을 만든다든지,  특정파일의 변경이 발생하면 이후에 변경(후처리)해야할 경우가 있을떄 사용한다.
