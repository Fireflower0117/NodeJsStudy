// 기본 URL 객체 생성
const url = new URL('https://example.com:8080/path/page?foo=bar&num=123');

// 쿼리 문자열 전체
console.log('Url Query String : %s', url.search);
console.log('Url host : %s', url.host);
console.log('Url hostname : %s', url.hostname);
console.log('Url port : %s', url.port);

// 쿼리 문자열 접근
console.log('foo : %s', url.searchParams.get('foo'));       // 'bar'
console.log('num : %s', url.searchParams.get('num'));       // '123'

// 쿼리 문자열 추가 및 삭제
url.searchParams.append('newParam', '456');
url.searchParams.delete('foo');
console.log('url.toString  :%s ', url.toString()); // 'https://example.com/path/page?num=123&newParam=456'

// 상대 URL 처리
const base = new URL('https://example.com/path/');
const relative = new URL('subpage?a=1', base);
console.log('relative.href : %s ', relative.href);  // 'https://example.com/path/subpage?a=1'

// 루트 기준 상대 URL
const rootRelative = new URL('/top?a=2', base);
console.log('rootRelative.href : %s', rootRelative.href); // 'https://example.com/top?a=2'

// 쿼리 전체 순회
for (const [key, value] of url.searchParams.entries()) {
    console.log('key : %s , value : %s' , `${key}`, `${value}`);
}

// 쿼리 스트링 모듈은  require('querystring')을 사용한다.
let qs = require('querystring');
let qsparse = qs.parse('q=node&year=2025&company=opennote');
console.log('qs : %s', qsparse);

let qsJsonStr = qs.stringify({q:'node',company:'opennote',location:'naju'});
console.log('qsJsonStr : %s', qsJsonStr);