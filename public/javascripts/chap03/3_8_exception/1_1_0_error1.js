/*  다음예제는 프로세스가 멈추지 않도록 에러를 처리하는 방법을 알아본다.
    try/catch문으로 감싸면 된다.
*/

setInterval( () => {
    console.log('-- 시작 --');
    try{
        throw new Error('서버를 고장내주마')
    }
    catch(err){
        console.error(err);
    }
}, 1000) // 1초마다 실행

/* {projecthome}\public\javascripts\chap03\3_8_exception> node .\1_1_0_error1.js
   멈출땐 Ctrl + C를 누른다.

* -- 시작 --
Error: 서버를 고장내주마
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_0_error1.js:8:15)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)
-- 시작 --
Error: 서버를 고장내주마
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_0_error1.js:8:15)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)
-- 시작 --
Error: 서버를 고장내주마
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_0_error1.js:8:15)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)

    ...........

    setInterval을 사용한이유는 프로세스가 멈추는지 확인해기 위해서이다.
    에러가 발생하고 try/catch구문을 안넣었으면 setInterval은 멈췄을 것이다.

* */