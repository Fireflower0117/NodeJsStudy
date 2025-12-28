/* express도 마찬가지로 html 을 응답할수도 있다.  */
const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3300);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './1_2_0_index.html'));
});

app.listen(app.get('port'), () => {
   console.log(app.get('port'), '번 포트에서 서버스를 시작합니다.');
});
