// Node는 Single Thread 로 동작한다. 따라서 멀티프로세스의 이점이 부족하다.
// I/O의 처리는 Event Loop로 좋은 성능을 보이지만.
// CPU계산량이 많은 부분은 취약한 부분이있다.
// 이러한 부분을 Cluster를 통해 해결할수있다.
// Node는 0.6.0부터 다중 프로세스의 Load Balancing 을 톻합한 Cluster모듈을 제공한다.

// Node.js의 Load Balancing = CPU 코어를 모두 활용할 수 있도록 여러 개의 워커 프로세스를 생성하고, 이들 간에 요청을 분산시키는 기능

// Node.js Cluster의 더 자세한 설명
// https://velog.io/@ckstn0777/Clustering-in-Action
let cluster = require('cluster');
let http = require('http');
const worker_threads = require("node:worker_threads");
let numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    // Worker 생성
    console.log(' isMaster : true');
    for(let i = 0; i < numCPUs; i++){
        console.log('cluster.fork() : %s', i);
        cluster.fork();
    }

    cluster.on('death', function(){
        console.log('worker : %s Died' , worker.pid);
    });
}
else {
    // Worker Process는 Http Server를 생성한다.
    http.Server(function(req, res){
       res.writeHead(200)
       res.end('Hello World \n');
    }).listen(8000);
    console.log(' http.Server Created ....')
}

// cluster.isMaster , cluster.isWorker로 현재 프로세스가 Master인지 Work인지 판단할수 있다.
// 내부에서는 process.env.NODE_WORKER_ID 환경의 undefined Master Process여부를 판단한다.

// MasterProcess면 Worker Process를 생성하고 Work Process에서는
// CPU Core 갯수(require('os').cpus().length) 만큼 Work Process를 생성한다. ( cluster.fork() )
// cluster.fork() 로 생성된 Process는 Master Process에서만 호출/컨트롤 할수있다.

// Cluster가 종료될떄 'death' 이벤트를 호출한다.

// ChatGPT문의 결과 (cluster가 이해가 안간다 싶어도 그냥넘어가도 될듯 하다. )

// 현재 2025.11월 시점에는 cluster는 “추천되지 않는 오래된 방식” 이라고한다.
// PM2의 cluster 모드 — 가장 많이 쓴다고한다.
// > pm2 start app.js -i max
// 이 한 줄이면 CPU 코어 수만큼 프로세스 자동 생성 + 로드밸런싱 + 자동 재시작까지 끝.
// 오늘날 Node.js 다중 프로세스 90%는 PM2가 처리한다