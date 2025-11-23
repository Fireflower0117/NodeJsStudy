process.nextTick(function(){
    console.log('nextTick으로 호출되었습니다.11');
});

/*
process.nextTick(function(){
    console.log('nextTick으로 호출되었습니다.22');
});
*/

console.log('이 메세지가 먼저 출력됩니다.');

// process.nextTick()에 등록된 CallBack함수는 즉시 실행되지 않고 Event Queue에 등록된다.
// 싱글스레드가 현재 작업을 완료한 다음 이벤트를 처리할수있는때가 되면
// process.nextTick에 등록한 CallBack함수가 등록된 순서대로 동작한다.

// 비동기로 실행하기위해 setTimeout 함수를 이용하기도한다.
// 그러나 setTimeout은 process.tick보다 비효율적으로 동작한다.
// timeout 지정시간동안 대기상태로 머물러있다. nextTick은 시간대기없이 더이상 처리할 작업이 없으면 대기시간없이 곧바고 실행한다.


