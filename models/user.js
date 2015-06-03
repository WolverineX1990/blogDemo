var client = require("../database");
//var uid = require("../utils/uuid");
function User(user)
{
  this.name = user.name;
  this.password = user.password;
}

var tableName = "user";
mysql = client.getDbCon();

module.exports = User;

User.prototype.save = function(callback)
{
   var user = {
     name:this.name,
     password:this.password,
     usercode:this.usercode
   };

   //uunid = uid.v4();
   //插入数据库
   var sql = "insert into user (username,password,usercode) values(?,?,?)";

   mysql.query(sql,[user.name,user.password,user.usercode],function(err,results,fields){
     if(err)
     {
       throw err;
     }
     else
     {
       return callback(err,fields);
     }
   });
}

//获取用户
User.get = function(usercode,callback)
{
	//读取users集合
	var sql = "select id,username,password from user where usercode='"+usercode+"'";
	mysql.query(sql,function(err,results,fields){
        if(err)
        {
        	throw err;
        }
        else
        {
        	callback(err,results[0],fields);
        }
	});
}