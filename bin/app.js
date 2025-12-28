/* 이파일은 package.json의  "scripts": { "start": "node ./bin/app" }
*  속성에 있으며 {projecthome}경로에서 npm start 명령을 수행하면 동작하는 파일이다.
* */

const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3300); // 1)

app.get('/', (req , res) => {
    res.send('Hello, Express');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서비스를 시작합니다.');
});

/*  {projecthome}> npm start

> nodejsbookstudy@0.0.0 start
> node ./bin/app

3300 번 포트에서 서비스를 시작합니다.

웹브라우저에서 http://localhost:3300/ 페이지를 접근해본다.

app.set(key,value)를 사용해서 데이터를 저장할수있고 app.get(key)로 값을 가져올수도있다.
app.set('port',process.env.PORT || 3300)는  process.env.PORT 가 있으면 적용하고 없으면 3300 Port를 적용한다.

app.get(주소, 라우터)는 주소에 대해 GET요청이 들어오면 어떤 반응하는 함수이며, 요청의 동작/반환은 라우터에서 수행한다.
현재는 라우터의 동작은 응답메세지로 'Hello, Express'하는 동작을 한다.

http.Method는 GET요청 외에도, POST,PUT,PATCH, DELETE, OPTIONS에 대해
app.get(주소,라우터), app.put(주소,라우터), app.patch(주소,라우터), app.delet(주소,라우터), app.options(주소,라우터)
로 동작요청을 제어 할수있다.   http.Method는 Node에만 존재하는것이 아니라 HTTP프로토콜의 표준 SPEC이다.


*/