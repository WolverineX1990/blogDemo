/*!
 * MyBlog - site index controller.
 * zcj
 * 2014-07
 */
var fs = require('fs');
exports.index = function(req,res){
     res.render('album',{
        title:'相册'//,
        //user : req.session.user
     });
}

exports.upload = function(req,res){
	// 获得文件的临时路径
    var tmp_path = req.files.photoFile.path;
    // 指定文件上传后的目录 - 示例为"images"目录。 
    var target_path = './uploads/images/' + req.files.photoFile.name;
    // 移动文件
    fs.rename(tmp_path, target_path, function(err) {
      if (err) throw err;
      // 删除临时文件夹文件, 
      fs.unlink(tmp_path, function() {
         if (err) throw err;
         res.send('File uploaded to: ' + target_path + ' - ' + req.files.photoFile.size + ' bytes');
      });
    });
}