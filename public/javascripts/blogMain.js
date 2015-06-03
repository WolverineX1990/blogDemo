$(function(){
	//单击登录按钮
   $("#loginBtn").iBox({target:"getHtml?templet=login",title:"登录",requestType:"ajax"});
   $("#addPhoto").iBox({target:"getHtml?templet=addPhoto",title:"上传",requestType:"iframe"});
});