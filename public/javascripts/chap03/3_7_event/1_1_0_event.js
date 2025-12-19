/* 우리가 직접 이벤트를 생성하고 호출하고 삭제 해보자  */

const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
   console.log('이벤트 1');
});

myEvent.on('event2', () => {  // 2)
    console.log('이벤트 2');
});

myEvent.on('event2', () => {  // 2)
    console.log('이벤트 2 추가');
});

myEvent.once('event3', () => {  // 4)
    console.log('이벤트 3');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');  // 4) once로 등록된 이벤트는 두번동작하지 않는다.

myEvent.on('event4', () =>{  // 1)
    console.log('이벤트 4');
});

myEvent.removeAllListeners('event4'); // 5)
myEvent.emit('event4');

const listener = () =>{
    console.log('이벤트 5');
}
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);  // 6)
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));  // 8)

/* {project}\public\javascripts\chap03\3_7_event> node .\1_1_0_event.js
이벤트 1
이벤트 2
이벤트 2 추가
이벤트 3
2

1) on(이벤트명,콜백)
   이벤트 이름과 이벤트 발생시 콜백 연결한다. 이런동작을 이벤트 리스닝이라하고
   이벤트 하나에 event2처럼 여러개의 콜백을 등록할수도 있다.

2) addListener(이벤트명,콜백)
   on과 동일한 기능이다.

3) emit(이벤트명)
   이벤트를 호출하는 메서드이다. 이벤트 이름을 인수로 넣으면 미리등록해뒀던 이벤트 콜백이 실행된다.

4) once(이벤트명 , 콜백)
   콜백이 한번만 수행되는 이벤트이다

5) removeAllListeners(이벤트명)
   이벤트에 연결된 모든 이벤트 리스너를 제거한다.
   myEvent.emit('event4');으로 이벤트를 호출하기전에 이벤트리스너를 제거해서 'event4'의 콜백은 실행되지 않았다.

6) removeListeners(이벤트명 , 리스너)
   이벤트에 연결된 리스너를 하나씩 제거한다.
   반드시 두번쨰 인자로 리스너를 입력해야 한다.  역시 삭제된 이벤트는 콜백이 동작하지 않는다.

7) off(이벤트명, 콜백)
   노드 버전 10버전에 추가된 메서드로 removeListeners와 같은 동작이다.
   두번쨰 인자로 반드시 콜백을 넣어야 한다.

8) listenerCount(이벤트명)
   현재 리스너가 몇개가 연결됐는지 확인할수있다.

Stream에서 봤던 on('data', 콜백)  , on('end', 콜백)에 대해 어느정도 감이 올것이다.
이제 직접 이벤트를 만들고 등록하고 독작을 직접 구현할수있다. 웹서버를 구축할때 많이 사용하는 방법이다.
*/



