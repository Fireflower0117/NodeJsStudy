console.log( require.resolve('fs'));
console.log( require.resolve('express'));
console.log( require.resolve('node:fs'));

/*
{projecthome}\public\javascripts\chap05\5_2_packagejson> node .\0_1_4_npm_protocol.js
fs
D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\index.js
node:fs


require.resolve 메서드로 해당모듈을 어디에서 참조하는지 알수있다.
내장모듈의 경우는 모듈이름만 표시되고 express처럼 npm에서 설치한 패키지는 전체 경로가 표시된다.
앞서 0_1_4_npm_collision.txt에서 수행한 {projecthome}>npm i fs express 명령어에서 fs모듈을 설치했다.
그러나  require.resolve('fs')를 통해 확인해보니 내장 모듈을 사용하는것을 알수있다.

require()시에 모듈이 헷갈리지 않게 명시적으로 선언하는 방법도있다. 노드 프로토콜(node:)을 사용하는 방법이다.
예를들어 require('fs') 대신 require('node:fs') 같은 형식으로 불러오면 된다.
 */