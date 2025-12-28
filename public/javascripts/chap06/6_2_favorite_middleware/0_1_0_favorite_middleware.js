/* middleware는 express의 핵심이다. 요청(request)과 응답(response)에 위치하기때문에 middleware라고 부른다.
*  뒤에 학습할 라우터와 에러핸들러 또한 middleware의 일종이므로 middleware가 express의 전부라고 해도 과언이 아니다.
*  middleware는 요청과 응답을 조작해서 기능을 추가하기도 하고, 나쁜요청을 걸러내기도 한다.
*
*  middleware는 app.use와 함께 사용된다.  app.use(middleware) 형태이다.
*  express서버에 middleware를 연결해보자
**/
const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3300);

app.use((req, res, next) => {
    console.log('요청url이 없으면 모든 요청에 다 실행됩니다.');
    next();
});

app.get('/', (req, res , next) => {
    console.log('GET /요청에만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러처리 middleware로 갑니다.');
});

app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버스를 시작합니다.');
});
