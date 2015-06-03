/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
     res.render('blog',{
        title:'日志'//,
        //user : req.session.user
     });
}