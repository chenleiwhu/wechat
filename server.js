
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , wechat = require('./routes/wechat')
  , path = require('path')

// Setup basic express server
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routing
app.get('/wechat', wechat.getService);
app.post('/wechat', wechat.postService);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

