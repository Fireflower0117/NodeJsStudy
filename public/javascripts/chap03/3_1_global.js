console.log(__filename);
console.log(__dirname);


// javascript에서 console객체는 window객체이고
// Node에서 console객체는 global객체 이다.
// global은 Node의 전역겍체로 javascript의 window객체와 같다.

// __filename는 현재수행중인 파일의 경로 + 파일명을 출력하고
// __dirname는 현재 수행중인 파일의 경로만 출력한다.

// global객체에는 Node의 프로세스 정보를 담고있는 process 객체가 포함되어있다.
// REPL을 통해 process 객체의 정보를 확인할수있다.

// REPL이란 Read-Eval-Print-Loop의 약자로 사용자가 입력한 명령어(소스코드)를 읽고(Read) 명령어를 평가(Eval)하고
// 결과를 출력(Print)한 다음 다시 입력을 기다리는 상태로 돌아가는 과정을 반복(Loop)하는 명경구조이다.
// 단순하게 말하면 cmd창(win + r > cmd)에서 node입력후 script대기상태를 REPL이라 할수있다.

// cmd창에서 node입력후  REPL상태에서 process.execPath를 입력하면
// node프로세스의 실행파일(exe)이 나온다.
// 다시 process.cwd()를 입력하면 현재 REPL이 수행된 경로가 출력된다.
// 다시 process.env를 입력하면 process의 실행환경(Envroment)정보를 확인할수있다.
// OS에 등록된 SystemProperties정보가 포함되어 있다.

// win + r > SystemPropertiesAdvanced 실행
// 환경변수 > 시스템변수 -> 실행환경(Envroment)정보

// ====================================================================================================
// Node.js는 Ecma 스크립트(javascript)를 준수한다.
// JavaScript를 잘모르면 https://ko.javascript.info/ 모던 JavaScript를 한번 수행해보는것도 좋다.
// 적어도 Part1 Core Javascript를 한번 따라해볼것을 권장한다.