/*!
 * MyBlog - sign index controller.
 * zcj
 * 2014-07
 */
var User = require('../models/user');
exports.index = function(req,res){
    var password = req.body.password;//md5.update(req.body.password).digest('base64');
    User.get(req.body.usercode,function(err,user){
         if(!user)
         {
            req.flash('error', ' 用户不存在'); 
            return res.redirect('/');
         }
         if(user.password!=password)
         {
            req.flash('error', ' 密码输入错误'); 
            return res.redirect('/');
         }

         req.session.user = user;
         res.redirect('/');
    });
}

exports.loginout = function(req,res){
    req.session.user = null;
    res.redirect('/');
}