// 지금까지 Node.js의 기본모듈 사용방법을 학습했다.
// 사용법 학습을 점검하는 차원에서 TCP를 활용한 Chating프록램을 만들어 보려고 한다.
// 채팅의 구조는 서버에 접속한 Client를 서버가 전부 알아야 하며, 어떤 클라이언트가 메세지를 전송하면
// 모든 클라이언트에게 메세지를 전송해야 한다.

let net = require('net')
   , sockets = [];

let server = net.createServer(function(socket) {
    sockets.push(socket);

    socket.on('data', function(data){ // client로부터 메세지를 받으면 동작하는 EventEmitter이다.
       for(let i = 0 ; i < sockets.length; i++){
           if(sockets[i] !== socket){ // 본인(메세지 전송한 소켓은 제외
               sockets[i].write(socket.remoteAddress + ' 님의말 : '+data );
           }
       }
    });

    socket.on('end', function(){
        let i = sockets.indexOf(socket);
        sockets.splice(i , 1);
    })
});

server.listen(8000);
console.log('TCP Chating Server가 시작됐습니다.');

// 3_19_TcpChatServer.js는 서버소켓이므로 한번만 호출(실행)한다.
// cmd은 intellij 로컬 Cmd든 한번만 수행 > node 3_19_TcpChatSetver.js

