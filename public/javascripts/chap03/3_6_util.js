var util = require('util');

let formatStr = util.format('%s의 최신버전은 %d이다', 'Node', 0.6);
console.log(formatStr);
// util.format는 문자열 formatting 하는 함수이다  %s는 String %d는 double이다.
// java 언어 log.info('{} {}', 'Node', 0.6);과 유사한 기능이다.


//let isArray = util.isArray([])
// Util Class에서 제공하는 isArray()함수가 있었다. 현재(2025.11) 비추천(deprecated) 상태로 변경되었다.
// 대신 Array.isArray()함수를 제공한다.

let isArray = Array.isArray([])
console.log('isArray : %s', isArray);

// util.isRegExp(/정규식/);
// Util Class에는 정규식을 검증하는 함수도 있다. 현재는 비추천상태이다.


// 대신 RegExp 변수를 기준으로 검증 할수있다.
let value = /abc/;
console.log('value instanceof RegExp : %s ', value instanceof RegExp);


// util.isDate(new Date())
// Util Class에는 정규식을 Date여부를 판단하는 함수도 있다. 현재는 비추천상태이다.

//대신  instanceof Date를 기준으로 비교하는 방법도 잇다.
console.log('new Date() instanceof Date : %s', (new Date() instanceof Date));

