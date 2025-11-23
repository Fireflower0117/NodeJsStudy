process.argv.forEach(function(val ,index , array){
    console.log(index +' : ' + val);
});

// 명령을 node 3_5_argv.js A B C D 로 입력 실행한다.
// 노드를 실행할때 전달한 Parameter는 모두 process.argv에 배열로 저장된다.
// 명령수행 command의 모든 항목을 출력하되 공백문자를 기준으로 Array를 생성한다.
