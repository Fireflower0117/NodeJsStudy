let cluster = require('cluster')
  , http = require('http')
  , numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    for(var i = 0; i < numCPUs; i++){
        let worker = cluster.fork();
    }
}
else{
    http.Server(function(req , res){

       // 청 시간 기록 (초, 나노초 단위)
       const start = process.hrtime();

       for(let i = 0; i < 5000000000; i++){
       }

        // 50억번 수행완료 시간
        const diff = process.hrtime(start);
        const elapsedSec = (diff[0] + diff[1] / 1e9).toFixed(3);  // 초 단위로 변환

        // 서버 콘솔 출력
        console.log(`요청 처리 시간 : ${elapsedSec} ms`);


        res.writeHead(200);
       res.end('Hello World\n');
    }).listen(8000);
}