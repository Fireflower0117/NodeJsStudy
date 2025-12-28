/* 이파일은 package.json의
*  "scripts": {
*    "start": "node ./bin/app",
*    "opennote": "node ./bin/opennote"
*  },
*  속성에 있으며 {projecthome}경로에서 npm run opennote 명령을 수행하면 동작하는 파일이다.
*
* start, test, install, publish 같은 특수 스크립트는 npm start처럼 run을 생략해도 되지만
* opennote같은  일반 사용자 정의 스크립트는 npm run opennote처럼 run을 꼭 붙여야 한다.
* */

const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req , res) => {
    res.send('Hello, OpenNote Express');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서비스를 시작합니다.');
});

/*  {projecthome}> npm start

> nodejsbookstudy@0.0.0 start
> node ./bin/app

3300 번 포트에서 서비스를 시작합니다.

웹브라우저에서 http://localhost:3300/ 페이지를 접근해본다.
*/