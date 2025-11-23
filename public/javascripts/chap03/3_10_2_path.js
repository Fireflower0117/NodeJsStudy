// 경로와 관련된 모듈은  require('path')로 제공하는 Node기본 모듈이다.
let path = require('path');

// path.normalize는 문자열로 전달받은 경로를 OS에 맞게 올바른 경로정보로 변경해주는 함수다.
let rsltnormalize11 = path.normalize('C:\\Windows\\System32');
let rsltnormalize22 = path.normalize('//user//data');
console.log('rsltnormalize11 : %s' , rsltnormalize11);
console.log('rsltnormalize22 : %s' , rsltnormalize22);

// path.join([path1] [,path2] [,path3] ..... ) 함수는 매개변수로 받은 경로정보를 이어붙여 하나의 문자열로 만들어 준다
let rsltPathJoin = path.join('C:','//Windows','//System32');
console.log('rsltPathJoin : %s' , rsltPathJoin);

// path.resolve([from...], to)는 전달받은 경로의 절대경로정보를 알수있다.
let pathResolveNowFile = path.resolve('.'); // 현재파일(3_10_2_path.js)의 절대경로 정보를 반환한다.
let pathResolveStyleFile11 = path.resolve('../','stylesheets/style.css');    // 현재파일 기준 절대경로를 알려준다. (실제물리적 경로와 다를수있다.)
let pathResolveStyleFile22 = path.resolve('../../','stylesheets/style.css'); // 실제 물리경로와 일치되도록 경로를 만들었다.

console.log('pathResolveNowFile   : %s', pathResolveNowFile);
console.log('pathResolveStyleFile11 : %s', pathResolveStyleFile11);
console.log('pathResolveStyleFile22 : %s', pathResolveStyleFile22);

// path.relative(from,to)는 from부터 to까지의 상대경로를 붙여만든다.

// from 은 현재파일기준으로 1단계 상위 디렉토리로 이동('../')후, 현재파일('.')의 경로까지 붙여만든다. }
let relativePath11 = path.relative('../','.');

// from 은 현재파일기준으로 2단계 상위 디렉토리로 이동('../../')후, 현재파일('.')의 경로까지 붙여만든다. }
let relativePath22 = path.relative('../../','.');

// from 은 현재파일기준으로 2단계 상위 디렉토리로 이동('../../')후, 파일('../asdf/anonymous.file')의 경로까지 붙여만든다. }
let relativePath33 = path.relative('../../','asdf/anonymous.file'); // 물리적으로 없는파일.. (붙여만든다)

console.log('relativePath11 : %s' ,relativePath11);
console.log('relativePath22 : %s' ,relativePath22);
console.log('relativePath33 : %s' ,relativePath33);

// path.extname()는 전달받은 파일의 확장자를 알수있다.
let rsltExt = path.extname('jquery.js');
console.log('rsltExt : %s', rsltExt);

// path class는 물리적파일의 존재유무와 상관없이 단순히 매개변수의 값을 가공하는 형태이다. 