// Node는 Event Loop기반으로동작한다. 그래서 객체가 이벤트를 발생시킬수있다.
// event기본모듈은 require('event'); 로 불러올수있다.
// Node에서 발행한 Event는 모두 events, EventEmitter의 객체이다.
// eventEmitter는 require('event').EventEmitter로 접근할수있다.

// server.on('connection',function(stream){
//    console.log('서버에 연결되었습니다.');
// });

// 객체에 이벤트를 추가하려면 emitter.addListener(event , listener)
// , emitter.on(event , listener)을 이용한다.
//  event 인자는 관계상 카멜케이스 형태의 문자열을 입력하고, listenser는 이벤트가 발생했을떄 호출한 함수를 입력한다.
//  일반적으로 객체.addListener() 보다 객체.on()함수를 더많이 사용한다.

// let callback = function(stream){
//    console.log('연결되었습니다.');
// }
// server.on('connection', callback );
// server.removeListener('connection', callback);

// emitter에 등록한 이벤트를 삭제하려면 객체.removeListener()함수를 사용한다.
// 객체의 모든 이벤트를 사용하려면 객체.removeAllListener([event])를 사용한다.
// removeAllListener함수의 인자값을 넣지않으면 객체에 등록된 모든 이벤트를 삭제한다.

// 한객체에 등록할수있는 eventEmitter는 10개 이상이면 메모리 누수탐지를 위해 경고 메세지를 출력한다.
// eventEmitter에 등록할수있는 이벤트 갯수를 늘리고 싶으면 emitter.setMaxListeners(n)을 사용한다.
// 여기서 n은 정수형 인자값이다.  인자를 0으로 지정하면 eventEmitter를 무한대로 등록할수있다. (위험:권고하지않음)

// emitter.listeners(event)를 사용하면 이벤트에 등록된 listener을 Array형태로 얻을수있다.


