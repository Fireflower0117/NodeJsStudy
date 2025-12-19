/* 마지막으로 파일/폴더의 변경사항을 감시할수있는 watch메서드를 알아본다. */

const fs = require('fs');

fs.watch('./3_1_2_writeme_rename.txt', (eventType, filename) => {
    console.log('eventType : ', eventType , ' , filename : ', filename);
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\3_1_3_watch.js
*
* 3_1_3_watch.js 파일을 수행하고 3_1_2_writeme.txt파일을 수정해본다.
* 파일의 내용을 수정해보고,  파일명을 변경해보고, 파일을 삭제해본다.
*
* eventType :  change  , filename :  3_1_2_writeme.txt
* eventType :  change  , filename :  3_1_2_writeme.txt
* eventType :  rename  , filename :  3_1_2_writeme.txt

  파일의 내용을 수정하면  eventType은 change 이고 파일명을 변경하거나 삭제하면 rename이 나타난다.
  rename 이벤트가 발생하면 다시는 watch가 수행되지 않는다.

  내용을 변경시  eventType :  change이 두번 호출되는 경우가 발생하기도한다.
  실무 프로젝트에서 사용할땐 주의가 필요하다.  
*  */