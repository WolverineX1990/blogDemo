
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

//flash支持
var flash = require('connect-flash');

app.configure(function(){
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'html');//设置引擎
	app.engine('html', require('ejs-locals'));
	app.locals._layoutFile = './layout.html';
 	app.use(express.bodyParser({uploadDir:'./uploads'}));//{uploadDir:'./uploads'} 更改上传文件路径
	app.use(express.methodOverride());// connect内建中间件，用以处理post请求，并可以伪装put等http方法
	app.use(flash());
	app.use(express.cookieParser('keyboard cat'));
    app.use(express.session());//使用session
});

//app.dynamicHelpers
app.use(function(req, res, next){
  var error = req.flash('error');
  var success = req.flash('success');
  res.locals.user = req.session.user;
  res.locals.error = error.length ? error : null;
  res.locals.success = success ? success : null;
  req.app.locals._layoutFile="./layout.html";
  next();
});

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());//设置图标
app.use(express.logger('dev'));// express依赖于connect这里就内建中间件会输出一些日志
app.use(express.json());//用以解析请求体，这里就会把字符串动态转换为json对象
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));//将本句提前 处理404
routes(app);//调用路由器解析规则
// app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
