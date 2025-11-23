var net = require('net');

var server = net.createServer((socket) => {
        console.log('서버에 연결되었습니다.');
        socket.on('end', () =>{
           console.log('연결이 종료되었습니다.');
        });

        socket.write('Hello \r\n');
        // cmd수행 > telnet localhost 8124를 수행하면 hello가 client에게 응답한다.
        // 여기서 보이는건 서버의 상태정보만 console.log에 남긴다.

        // telnet를 멈추러면 Ctrl + ] 를 실행후 quit를 입력하면 telnet이 종료된다.(win + macOs + Linux 공통)
        // telnet종료시 client는  FIN(소켓을더이상사용하지않음)패킷을 서버로 전송한다.

        // 서버는 FIN패킷을 받으면 socket.on('end', () => {}) 가 동작한다. 
});

server.listen(8124, () => {
    console.log('서버가 %d포트로 연결되었습니다.', server.address().port);
});
