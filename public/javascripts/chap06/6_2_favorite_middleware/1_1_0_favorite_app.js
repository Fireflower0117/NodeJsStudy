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
