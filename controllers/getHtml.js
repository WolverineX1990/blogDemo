/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */

exports.index = function(req,res){
	 req.app.locals._layoutFile="./nolayout.html";
     res.render(req.query.templet,{
     	"title":"aa",
     	"layout":"aa"
     });
     req.app.locals._layoutFile="./layout.html";
}