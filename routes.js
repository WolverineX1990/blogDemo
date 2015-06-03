/*!
 * MyBlog - route.js
 * Copyright(c) 2014 1248198090@qq.com>
 * zcj Licensed
 */

/**
 * Module dependencies.
 */

var site = require('./controllers/site');
var blog = require('./controllers/blog');
var album = require('./controllers/album');
var collection = require('./controllers/collection');
var friends = require('./controllers/friends');
var music = require('./controllers/music');
var profile = require('./controllers/profile');
var sign = require('./controllers/sign');

var getHtml = require('./controllers/getHtml');

module.exports = function (app) {
  // home page
  app.get('/', site.index);
  app.get('/blog', blog.index);
  app.get('/album', album.index);
  app.get('/collection', collection.index);
  app.get('/friends', friends.index);
  app.get('/music', music.index);
  app.get('/profile', profile.index);
  app.post('/login',sign.index);
  app.get('/loginout',sign.loginout);
  app.get('/getHtml',getHtml.index);
  app.post('/addPhoto',album.upload);

  app.get('*', function(req, res){
    res.render('404.html', {
        title: 'No Found'
    })
});
};
