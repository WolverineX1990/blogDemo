/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
     res.render('collection',{
        title:'收藏'//,
        //user : req.session.user
     });
}