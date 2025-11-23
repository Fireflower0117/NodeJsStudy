let net = require('net');

let client = net.connect({port: 8000}, function() {
    console.log('서버 접속 완료!');
    process.stdin.pipe(client);
    client.pipe(process.stdout);
});

// 3_19_TcpChatClient.js는 ClientSocket이므로 어러번 호출(실행)해도된다.
// window창에서 cmd를 여러개(3개이상) 열고 파일을 실행한다. > node 3_19_TcpChatClient.js
// 아무창에서 메세지를 입력하고 엔터를 눌러본다.
