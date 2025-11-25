Node.js에서 가장 대표적인 웹 FrameWork인 express를 배워본다.
express는 Web Framework이므로 프로젝트 템플릿을 만드는 명령어를 제공한다.
cmd 명령어를 사용하려여 글로벌로 설치한다.  (  -g 옵션)

cmd> npm install express -g             express를 설치한다.
cmd> npm install express-generator -g   express 프로젝트 생성 CLI

설치를 완료하면 커맨드 라인에서 express 명령어를 사용할수있다.
난 D:\NodeStudy> 에서 실행했다.

D:\NodeStudy> express simpleweb
실행후 경로에 가보면 (D:\NodeStudy\simpleweb) 프로젝트가 생성되어있다.

커맨드에서 express 명령어는 다음의 형식으로 사용한다.
cmd> express [옵션] [경로]

경로를 지정하지 않고 폴더명만 입력하면 현재 경로에 express프로젝트를 생성한다.
옵션영역에서는 view템플릿이나, css템플릿 엔진등을 지정한다.
cmd> express -h 를 입력하면 express의 옵션을 확인할수있다.
-v --view 뷰템플릿을 지정할수있다. jade , ejs , haml, jQUery 등이 있다.  (default : jade)
-c --css css엔진을 선택한다. css , less , Saas, Study 중에서 선택 가능 (deault : css)

jade view 템플릿 엔진을 사용하려면 jade모듈을 설치해야한다.
현재 경로에서 사용할것이므로 -g옵션 없이 설치힌다.
D:\NodeStudy\simpleweb> npm install express jade

가장 최근버전 jade모듈을 설치했다. (프로젝트내부에 package.json에서 dependencies 확인 )
port정보는  ${project_home}/bin/www 파일을 열어보면 알수있다. (기본 : 3000) 일것이다.
이제 가장 간단한 웹엔진을 구동시켜본다.

D:\NodeStudy\simpleweb>node ./bin/www

아니면 package.json에서
"scripts": {
  "start": "node ./bin/www"
}
추가입력후
D:\NodeStudy\simpleweb>npm start를 실행하면 된다.
웹브라우저에서 localhost:3000입력 하면 express 기본 페이지가 열린다.




