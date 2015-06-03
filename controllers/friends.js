/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
     res.render('friends',{
        title:'博友'//,
        //user : req.session.user
     });
}