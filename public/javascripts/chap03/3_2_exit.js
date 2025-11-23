process.on('exit', function(){
    console.log('Good Bye');
});

// process 객체는 eventEmitter 객체이다.
// eventEmitter은 event 처리를 담당하는 객체이다.
// eventEmit이란 객체에 이벤트를 등록하고 객체의 event를 listen하고있는 개체가 동장하는 매커니즘 이다.
// 신호(이벤트)를 뿌리면, 듣고 있던 애들(listener:리스너)들이 자동으로 반응하는 구조.
// 이벤트를 뿌리는걸(Publisher), 듣고있는 애들(Subscriber)라 하고 이런 구조를 Pub/Sub 구조라고 칭한다.

// EventEmitter은 Node.js에서 제공하는 Event를 등록하고 처리할수있도록 만든 클래스이다.

// process.on('exit', () => {})는 아무런 명령 등등이 없고 단순히
// process의 종료됐을떄 수행되는 함수이다.
// 명령수행되자마자 프로세스는 종료되고, 종료되면서 console에 'Good Bye' 로그를 남기고 프로세스는 종료된다.

