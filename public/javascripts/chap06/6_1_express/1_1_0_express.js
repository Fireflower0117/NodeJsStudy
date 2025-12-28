/* 이제 본격적으로 express를 시작해보기로한다.
   먼저  프로젝트 폴더를 생성하고  package.json을 생성해야 한다.
   그러나 현재 학습용 프로젝트가 이미 package.json이 있으므로 이과정은 skip한다.

   cmd(터미널)로  express 패키지를 설치한다.
   {projecthome}> npm i express
   {projecthome}> npm i -D nodemon

    package.json 파일을 열어 "scripts" 속성을 "nodemon app"로 변경한다.
    AS-IS : "scripts": { "start": "node ./bin/www" }
    TO-BE : "scripts": { "start": "nodemon app" }

    nodemon이란 서버스크립트가 변경될때마다 매번 서버를 재시작해야 하는 번거로움을 해소시켜주는 모듈이다.
    SpringBoot의 spring-boot-devtools와 같은 기능을 하는 모듈이다.
    nodemon이 실행되는 콘솔에 rs(ReStart)를 입력해 재기동 할수도있다.

    nodemon은 개발용으로만 사용할것을 권장한다. 운영서버에 배포를하면 스크립트가 빈번히 변경될일이 없다.

    그리고 서버가될 app.js를 아래와 같이 작성한다.
    app.js 파일은 bin/app.js 경로에 있다.
*/