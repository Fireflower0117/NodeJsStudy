let http = require('http');

http.Server(function(req, res){

    // 청 시간 기록 (초, 나노초 단위)
    const start = process.hrtime();

    for(let i = 0; i < 5000000000; i++){
    }
    // 100억번 수행완료 시간
    const diff = process.hrtime(start);
    const elapsedSec = (diff[0] + diff[1] / 1e9).toFixed(3);  // 초 단위로 변환

    // 서버 콘솔 출력
    console.log(`요청 처리 시간 : ${elapsedSec} ms`);

    res.writeHead(200);
    res.end('hello World \n');
}).listen(8000);
// 요청이 들어오면 50억번 반속수행하고 응답메세지를 client에세 전송한다. ==>> res.end('hello World \n');
// Node에서는 I/O (Input/Output)이 비동기로 동작해서 큰 부하를 주기어렵다. (NonBlocking)
// Server의 성능을 테스트 하려면 요청을 처리하는 시간이 오래걸리게 할필요가있어서 10억번 반복문을 추가한것이다.

// 성능 테스트는 3_18_cluster_server.js에서 연속....