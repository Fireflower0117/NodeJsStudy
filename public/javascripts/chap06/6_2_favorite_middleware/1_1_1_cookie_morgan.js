/* middleware를 통해 요청과 응답에 다양한 기능을 추가할수도있고, 이미 많은 개발자가
*  유용한 기능들을 package로 만들어뒀다. 실무에서 자주사용하는 패키지들을 설치해보자.
*
*  {projecthome}>npm i morgan cookie-parser express-session dotenv
*  {projecthome}>npm audit
*
**/
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const {httpOnly} = require("express-session/session/cookie");

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3300);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false
    ,saveUninitialized: false
    ,secret : process.env.COOKIE_SECRET
    ,cookie : {httpOnly : true, secure : false}
    ,name : 'session-cookie'
}));

app.use((req, res, next) => {
    console.log('모든 요청에 전부 실행됩니다.');
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

/* package.json에 "scripts": {
                               "app_morgan": "node ./bin/app_cookie_morgan"  추가
                   },
   .env파일은 반드시  {projecthome}\.env 파일을 생성해야 한다.
   그래야 process.env.COOKIE_SECRET를 참조할수있다.

   {projecthome}> npm run app_morgan

> nodejsbookstudy@0.0.0 app_morgan
> node ./bin/app_cookie_morgan

[dotenv@17.2.3] injecting env (1) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }
3300 번 포트에서 서버스를 시작합니다.
모든 요청에 전부 실행됩니다.
GET /요청에만 실행됩니다.
Error: 에러는 에러처리 middleware로 갑니다.
    at D:\JetBrains\workspace-egov\NodeJsBookStudy\bin\app_cookie_morgan.js:42:11
    at Layer.handle [as handle_request] (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\route.js:137:13)
    at D:\JetBrains\workspace-egov\NodeJsBookStudy\bin\app_cookie_morgan.js:40:5
    at Layer.handle [as handle_request] (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\layer.js:95:5)
    at D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\index.js:281:22
    at Function.process_params (D:\JetBrains\workspace-egov\NodeJsBookStudy\node_modules\express\lib\router\index.js:335:12)
GET / 500 18.713 ms - 47
모든 요청에 전부 실행됩니다.
GET /favicon.ico 404 3.414 ms - 150

  전부 정상 동작했음.
  app.get('/', (req, res , next) => {
    console.log('GET /요청에만 실행됩니다.');
        next();
   }, (req, res) => {
        throw new Error('에러는 에러처리 middleware로 갑니다.');  <== 무조건 에러를 발생시키는 구문이다.
   });


  dotenv 패키지는 .env 파일을 읽어서 process.env로 만든다. dotenv이름이 이유도  dot(.)env라서  .env라는 뜻이다.
  process.env.COOKIE_SECRET을 별도로 관리하는 이유는 보안과 설정의 편의성 때문이다. .properties처럼 key,value형태의 쌍으로 구성된 파일이다.
  그래서 .env파일에 보안키, 인증키, 비밀키 정보를 넣어두고 사용한다. 소스코드에 바로 키정보를 넣어두면 유출시 보안위협이 발생한다.
  그러나 .env파일에 넣어두면 소스파일이 유출되어도 비교적 안전하다.

  -------------------------------------------------------------
  morgan은 콘솔에서 나오는 GET /favicon.ico 404 3.414 ms - 150 로그 정보는 morgan middleware에서 나오는것이다.
  morgan middleware는 다음과 같은 형태로 사용한다.
  ex) app.use(morgan('dev'));

  인수로는 dev외에 combined ,common, short , tiny등을 넣을수있다. 인수를 변경하면
  log형태가 달라지니 직접한번씩 테스트 해보길 바란다.
  개발환경에서는 dev , 운영서버환경에서는 combined을 통상적으로 사용한다.

* */