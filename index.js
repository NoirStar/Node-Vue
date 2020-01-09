const express = require('express');
const app = express(), testJson = require('./test/test.json');

//기본 path를 /public으로 설정 css, javascript 등의 파일 사용을 위해
app.use(express.static('public'));

// view 경로 설정
app.set('views',__dirname + '/views');

// 화면 engine을 ejs로 설정 렌더링 
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile); // html 형식으로 ejs를 쓰겠다.
app.get('/',(req,res) => {
    //res.send("Hello nodejs");
    //res.json(json)
    res.render('index',{name : 'tree'});
});

app.get('/test/:email',(req,res) => {
    testJson.email = req.params.email;
    testJson.pw = req.query.pw;
    testJson.aa = req.query.aa;
    res.json(testJson)
});

const server = app.listen(8081,function(){
    console.log("Express's started on port 8081");
});