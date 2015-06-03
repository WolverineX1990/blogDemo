/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
     res.render('index',{
        title:'首页'//,
        //user : req.session.user
     });
}