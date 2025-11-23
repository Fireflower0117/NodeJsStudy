let cluster = require('cluster');
let http = require('http');
let numReqs = 0;

if(cluster.isMaster){
    console.log('cluster.isMaster : %s', cluster.isMaster);
    // Worker 생성
    for(let i = 0; i < 2; i++ ){
        let worker = cluster.fork();
        worker.on('message', function (msg){  // workProcess로부터 메세지를 전송받으면 동작하는 EventEmitter
            if(msg.cmd && msg.cmd == 'notifyRequest' ){
                numReqs++;
            }
        });
    }

    setInterval(function(){
       console.log('numReqs = %s ', numReqs);
    }, 1000);
}
else {
    console.log('cluster.isWorker : %s, pid: %s', cluster.isWorker, process.pid);
    // Worker Process는 Http Server를 생성한다.
    http.Server(function(req , res){
       res.writeHead(200);
       res.end('Hello world \n');

       // Master Process에서 메세지 전송
       // 웹브라우저에 localhost:8000으로 접속후 Ctrl + R 을 누르면 Page가 Refresh되며
       // masterProcess로 메세지( {cmd : 'notifyRequest'} )가 전송된다.
       // Master Process은  notifyRequest 메세지를 받으면 process를 2개씩 fork() 시킨다
       process.send({procInfo : process,  cmd : 'notifyRequest'});  // MasterProcess에서는 worker.on('message',()=>{}); 가 동작한다.
    }).listen(8000);
}

// 각 MasterProcess는  WorkProcess에 process.send()호 메세지를 전송하고
// MasterProcess에서는 'message' 이벤트 리스너를 등록했다. ==>>  worker.on('message', () => {});
// message Event Listener에 notifyRequest 메세지가 전달되면 요청수를 증가시키고 클러스터의 전체 요청수를 출력한다.
