/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
     res.render('profile',{
        title:'关于我'//,
        //user : req.session.user
     });
}