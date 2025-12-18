/* pipeline메서드를 사용하면 장점이있습니다. 중간에 AbortController를 사용해 원할때 파이프를 중단할수있습니다.  */

import {pipeline} from "stream/promises";
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;

setTimeout( ()=> ac.abort() , 1); // 1) 1ms 뒤에 중단 신청
await pipeline(
      fs.createReadStream('./2_1_4_readme.txt')
    ,zlib.createGzip()
    ,fs.createWriteStream('./2_2_3_readme.txt.gz')
    ,{ signal }  // 2) 마지막 인수로 ac.signal을 입력한다
);

/* pipeline의 마지막 인수로 {signal}을 추가하면, 원하는 시점에 ac.abort()를 호출하면 중단됩니다.
*
* 1) setTimeout은 비동기함수이며 다음단계인 pipeline()을 수행으로 넘긴다.
* 2) 마지막 인수로 ac.signal값을 입력하면 1)에서 설정한대로 1ms뒤에 pipeline메서드가 멈춘다.
*
*    이렇게 전체파일을 모두 버퍼에 저장하는 readFile메서드와 부분으로 나눠읽는 createReadStream 메서드를 알아봤다.
*    이 두가지 메서드간 메모리 사용량 차이를 확인해보기로 한다.
**/