// Node는 ChildProcess모듈로 자식프로세스에 대한 기능을 제공한다.  ( fork와 유사한기능 )
// childProces는 require('child_process').spawn(command, args=[], [options])는 command를 이용해 자식프로세스를 생성한다.
// options의 기본값은 {cwd:undefined, env:process.env, setsid : fals} 이다.
// cwd는 생성된 프로세스가 실행될 디렉토리를 지정하고, env는 자식프로세스가 접근할수있는 환경변수,
// setsid가 true이면 서브프로세스를 새로 생성한다. false이면 초최1회 프로세스사용후 재호출시 기존생성된 프로세스를 사용한다.
// 자식프로세스의 접근은 child.stdin , child.stdout, child.stderr 세가지 스트림으로 접근가능하다.

const { spawn } = require('child_process');
const iconv = require('iconv-lite'); // window cmd는 기본적으로 CP949 를 사용한다. cp949를 UTF-8 변환하는 모듈이다.

// cmd.exe에서 'dir' 명령을 실행하도록 설정
const dir = spawn('cmd.exe', ['/c', 'dir']);

dir.stdout.on('data', (data) => {
    const decoded = iconv.decode(data, 'cp949');
    console.log(`stdout: ${decoded}`);
});

dir.stderr.on('data', (data) => {
    const decoded = iconv.decode(data, 'cp949');
    console.error(`stderr: ${decoded}`);
});

dir.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
});


// const { spawn } = require('child_process'); // 구조분해 할당방식   ( 모듈에서 함수 하나만 꺼내 사용하는경우)
// 다른 함수 (exec, fork 등) 필요 없을 때 간결하게 작성 가능 : 클래스내부 단일함수인경우

// const spawn = require('child_process');     // 전체 모듈 로딩방식  ( 모듈객체 전체를 Loading 하는경우)
// 하위 함수 사용 시 접두어로 spawn.을 붙여야 함

// 구분	        구조 분해 할당 방식	      전체 모듈 로딩 방식
// 사용 편의성	특정 함수만 쓰는 경우 유리 	  전체 함수 접근 필요 시 유리
// 코드 길이	    짧고 간결	                  명시적이고 직관적
// 성능 차이	    사실상 없음	              없음

// 간단한 스크립트 → 구조 분해 할당 방식
// 라이브러리, 유틸 등 복잡한 구조 → 전체 모듈 로딩 방식

// 대부분의 실무 코드에서는 구조분해 할당방식 방식({ spawn })을 많이 사용


// ex)  require('open_note'); 모듈이 있다고 가정을 한다.
//      require('open_note'); 모듈안에는 여러가지 함수가 있다. ( A() , B(), C() , D(), ..... )

//      구조분해 할당 방식은  let {B} =  require('open_note');
//      require('open_note') 모듈안에서 B()함수만 사용하겠다는 의미.  그래서 바로 B();함수를 호출할수있다.

//      전체 모듈 로딩방식은 let openNote =  require('open_note');
//      require('open_note') 모듈 전체를 가져와서 openNote변수에 할당후 사용
//      그래서 사용시에는 openNote.B()를 이용해 호출할수있다.

