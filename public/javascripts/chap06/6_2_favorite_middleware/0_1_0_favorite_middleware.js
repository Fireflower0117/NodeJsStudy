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

//  1)
app.get('/', (req, res , next) => {
    console.log('GET /요청에만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러처리 middleware로 갑니다.');
});

//  1)
app.use((err, req, res, next) => { // 2)
   console.error(err);
   res.status(500).send(err.message); // 3)
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버스를 시작합니다.');
});

/* app.use에 매개변수가 req, res, next인 함수를 넣으면 된다. middleware는 위에서 아래로 순차적으로 처리하며
*  요청과 응답사이에 기능을 추가할수있다. 매개변수의 3번째로 next를 사용했는데 다음 middleware로 넘기는 함수이다.
*  next()를 수행하지 않으면 다음 middleware가 실행되지 않는다.
*
*  middleware가 실행되는 경우
*  app.use(middleware)   : 모든 요청에서 middleware 실행 (interceptor같은 역할)
*  app.use('/abc',middleware) : /abc로 시작하는 모든 요청에서 middleware 실행
*  app.post('/abc', middleware) :  /abc로 시작하는 POST방식 요청에 middleware 실행
*
*  app.use , app.get 같은 라우터에 미들웨어를 어러개 장착할수있다.
*  현재는 apt.get('/') 라우터에 2개이 middleware가 연결되어있다.
*  app.get('/',middleware) , app.use(err, req, res) 이다. // 1)
*
*  에러처리 middleware는 매개변수가 err, req, res, next로 네개이다. // 2
*  모든 매개변수를 사용하지 않더라도 반드시 4개의 매개변수여야 한다.
*  첫번째 매개변수 err은 에러에 관한 정보가 담겨있다.
*  res.status() 메서드로 HTTP의 상태코드를 저장할수있으며 기본값은 200이다. // 3)
*
*  에러처리 middleware를 직접 연결하지 않아도 기본적으로 express가 에러처리를 한다.
*  그러나 실무 어플리케이션에서는 에러처리 middleware를 연결해주는것이 좋다.
*  middleware가 특별한 경우가 아니면 가장 아래에 위치하도록 한다. (가장 마지막 next)
*  */