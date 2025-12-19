/* fs모듈은 파일시스템을 조작하는 다양한 메서드를 제공한다.
*  지금까지는 단순히 파일읅 읽고,쓰기를 했지만 파일을 생성,삭제 할수있고 폴더를 생성,삭제 할수도 있다.
**/

const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./3_1_1_filesystem', constants.F_OK | constants.W_OK | constants.R_OK ) // 1)
    .then(() => {
        return Promise.reject('이미 폴더있음');
    })
    .catch( (err) => {
        if(err.code === 'ENOENT'){
            console.log('폴더없음');
            return fs.mkdir('./3_1_1_filesystem');  // 2)
        }
        return Promise.reject(err);
    })
    .then( () => {
        console.log('폴더만들기 성공');
        return fs.open('./3_1_1_filesystem/file.js', 'w');  // 3)
    })
    .then((fd) => {
        console.log('빈파일 만들기 성공', fd);
        fd.close();  // 3_1)
        return fs.rename('./3_1_1_filesystem/file.js', './3_1_1_filesystem/file_new.js'); // 4)
    })
    .then( () => {
        console.log('이름바꾸기 성공');
    })
    .catch((err) => {
        console.error(err);
    });

/*
{projecthome}\public\javascripts\chap03\3_6_filesystem> node .\3_1_0_fsCreate.js
폴더없음
폴더만들기 성공
빈파일 만슬기 성공 FileHandle {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  close: [Function: close],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false,
  [Symbol(kHandle)]: FileHandle {},
  [Symbol(kFd)]: 3,
  [Symbol(kRefs)]: 1,
  [Symbol(kClosePromise)]: null
}
이름바꾸기 성공


1) fs.access(경로, 옵션, 콜백)
   폴더나 파일에 접근할수있는지 확인하는 메서드이다.
   두번째 인수로 옵션을 넣는데 constants 상수들이다.
   constants.F_OK : 파일존재 유무
   constants.W_OK : 쓰기가능 여부
   constants.R_OK : 읽기가능 여부
   파일이나, 폴더에 권한이 없다면 에러가 발생하는데 파일이나 폴더가 없을떄 에러코드는 'ENOENT' 이다.

   따라서 실행위치({projecthome}\public\javascripts\chap03\3_6_filesystem)에
   3_1_1_filesystem 폴더가 있는지. 쓰기나 읽기가 가능한지를 확인하는 메서드 이다

2) fs.mkdir(경로, 콜백)
   폴더(디렉토리)를 만드는 메서드이다. 이미 폴더가 있다면 에러가 발생하므로 먼저 access메서드를 호출해서
   확인 하는것이 중요하다.

3) fs.open(경로,옵션,콜백)
   파일의 아이디(fd 변수)를 가져오는 메서드 이다. 파일이 없다면 파일을 생성하고 생성한파일의 정보를 반환한다.
   두번쨰 인수로 어떤 동작을 할것인지 설정할수있다.
   w: 파일쓰기(없으면 신규생성) , r : 파일읽기 , a : 파일 내용추가

   만약 두번째 인수로 'r'을 넣었다면 읽을수있는 파일이 없어 에러가 발생했을것이다.

   3_1) 파일은 외부자원이다. fs.open()을 수행했으면 작업을 완료하고
        반드시 파일자원을 해재(close)해야 한다. 안하면 메모리 누수가 발생할수있다.
        fs.open()를 해도 수동으로 close()안하고, 자동으로 close()해주는 경우가 있다.
        다음에 알아보기로 한다.

4) fs.rename(기존파일경로, 새파일경로, 콜백)
   파일의 이름을 변경하는 메서드다 기존파일경로에서 새파일 경로로 바꾼다.
   반드시 같은 폴더(경로)를 지정할필요는 없으므로 파일을 잘라내서 옮기기 같은 기능으로 사용도 가능하다.
 
 */