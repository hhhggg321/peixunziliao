
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
        name: '国土厅',
        urls: [
            '/pdf/1/1.jpg',
            '/pdf/1/2.jpg',
            '/pdf/1/3.jpg',
            '/pdf/1/4.jpg',
            '/pdf/1/5.jpg',
            '/pdf/1/6.jpg',
            '/pdf/1/7.jpg',
        ],
        fileUrl: '/pdf/1.pdf',
        fileName: '国土厅分享资料'
    },
    {
        id: 1,
        name: '公安厅',
        urls: [
            '/pdf/1/1.jpg',
            '/pdf/1/2.jpg',
            '/pdf/1/3.jpg',
            '/pdf/1/4.jpg',
            '/pdf/1/5.jpg',
            '/pdf/1/6.jpg',
            '/pdf/1/7.jpg',
        ],
        fileUrl: '/pdf/1.pdf',
        fileName: '公安厅分享资料'

    },
    {
        id: 2, 
        name: '农业厅',
        urls: [
            '/pdf/1/1.jpg',
            '/pdf/1/2.jpg',
            '/pdf/1/3.jpg',
            '/pdf/1/4.jpg',
            '/pdf/1/5.jpg',
            '/pdf/1/6.jpg',
            '/pdf/1/7.jpg',
        ],
        fileUrl: '/pdf/1.pdf',
        fileName: '农业厅分享资料'
    },
];

//响应首页get请求
app.get('/',function(req, res){
    res.render('index',{
        title: '首页',
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
