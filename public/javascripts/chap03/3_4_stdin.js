process.stdin.resume();
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(chunk){
    process.stdout.write('data : '+chunk);
});

process.stdin.on('end', function(){
    process.stdout.write('end....');
});

// process객체는 표준 입/출력 관련 함수를 제공한다. (stdin: standard input , stdout : standard out)
// 표준입력은 키보드이고,  표준출력은 console의 command 라인이다.

// 표준입력( process.stdin.resume() ) 상태를 만나면 키보드의 입력을 대기상태로 유지한다.
// 입력정보의 문자는 utf8로 지정하고 stdin의 입력이 들어오면 process.stdin.on('data', () => {}); 함수가 동작한다.
// process의 표준입력(stdin)이 종료되면 process.stdin.on('end', () => {}); 함수가 동작한다.

// 프로세스를 종료하려면 Ctrl + D를 입력하면 된다. (macOs 기준)
// Window환경은 Ctrl + Z + Enter을 입력하면 된다....고 하는데 난 안된다.


