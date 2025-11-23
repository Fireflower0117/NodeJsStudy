let { exec } = require('child_process');  // child_process 모듈내무에 exec함수만 사용하는경우 ..
const iconv = require('iconv-lite'); // Window Cmd는 기본적으로 CP949 CharSet를 사용한다. iconv-lite눈 UTF-8로 변환하는 모듈이다.

exec('powershell -Command "Get-Content *.js, 3_1_global.js | Measure-Object -Line"'
    , { encoding: 'buffer' }
    , (error, stdout, stderr) => {
        const out = iconv.decode(stdout, 'cp949');
        const err = iconv.decode(stderr, 'cp949');

        console.log(`stdout: ${out}`);
        console.log(`stderr: ${err}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});

// 동작 설명
// powershell -Command: PowerShell 명령 실행
// Get-Content: 파일 내용 읽기 (linux의 cat 역할)
// Measure-Object -Line: 줄 수 세기 (linux의 wc -l 역할) wc : WorlCount , -l : Line수
// encoding: 'buffer': 버퍼로 받아야 CP949 디코딩 가능
// iconv.decode(..., 'cp949'): 한글 깨짐 방지







