process.on('uncaughtException', function(err){
   console.log('예외 : '+err);
});

setTimeout(function(){
    console.log('이코드는 실행됩니다.');
}, 500);

// 존재하지 않는 함수수행
nonExistentFunction();

console.log('이함수는 실행되지 않습니다.');

// JavaScript의 Try Catch를 사용하면 예외발생 대처가 가능하다.
// 그러나 Try Catch를 사용하지 않은 구문에서 예외가 발생하면 에러정보를 출력하고 process가 종료된다.

// 이떄 process의 uncaughtException Event Lisnener를 등록하면 예상치못한 장애상황에도 대처가 가능하다.
// nonExistentFunction()는 정의되지 않은 함수로 찾을수없어 장애가 발생했고,
// 그시점에 process의 uncaughtException Listener가 동작한것이다.
// Node의 Event는 모두 비동기로 동작한다.
// nonExistentFunction 함수를 못찾는 장애가 발생하기전에 setTimeOut은 Listener로 등록되어있는 상태다.
// 그래서 예외 : 장애구문이 콘솔에 출력되고 0.5초후 '이코드는 실행됩니다.' 메세지가 콘솔에 출력된다
// 장애가 발생한 이후시점의 console.log는 출력되지 않는다.

// 만약 process의 uncaughtException EventListener가 동작하지 않았다면
// Console에 Error정보를 Trace하고 프로세스가 종료된다.
// 그랬다면. setTime의 메세지가 출력되기 이전에 process가 종료되고
// '이코드는 실행됩니다.' 메세지도 출력하지 않는다. 




