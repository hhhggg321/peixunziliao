
//加载依赖库
var express = require('express');
var path = require('path');
var moment = require("moment");
var bodyParser = require('body-parser');

//创建express实例
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//定义EJS模板引擎和模板文件位置
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//定义静态文件目录
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'scripts')));

var articles = [
    {
        id: 0, 
        name: '省国土厅',
        fileUrl: '/pdf/省国土厅.pdf',
        fileName: '省国土厅交流分享资料'
    },
    {
        id: 1, 
        name: '省国税局',
        fileUrl: '/pdf/省国税局.pdf',
        fileName: '省国税局交流分享资料'
    },
    {
        id: 2, 
        name: '大同市',
        fileUrl: '/pdf/大同市.pdf',
        fileName: '大同市交流分享资料'
    },
    {
        id: 3,
        name: '晋中市',
        fileUrl: '/pdf/晋中市.pdf',
        fileName: '晋中市交流分享资料'

    },
    {
        id: 4, 
        name: '万柏林区',
        fileUrl: '/pdf/万柏林区.pdf',
        fileName: '万柏林区交流分享资料'
    },
    {
        id: 5, 
        name: '介休市',
        fileUrl: '/pdf/介休市.pdf',
        fileName: '介休市交流分享资料'
    },
    {
        id: 6, 
        name: '左权县',
        fileUrl: '/pdf/左权县.pdf',
        fileName: '左权县交流分享资料'
    },
    {
        id: 7, 
        name: '孝义市',
        fileUrl: '/pdf/孝义市.pdf',
        fileName: '孝义市交流分享资料'
    },
];

//响应首页get请求
app.get('/',function(req, res){
    res.render('index',{
        title: '山西省2018年全省政务公开与信息编报暨电子政务工作培训班',
        articles: articles
    });
});

app.get('/article/:id',function(req, res){
    console.log(req.params.id);
    let id = req.params.id;
    res.render('detail',{
        id: id,
        title: articles[id].name + '分享资料',
        articles: articles
    });
});

//监听4200端口
app.listen(4200,function(req, res){
    console.log('app is running at port 4200');
});
