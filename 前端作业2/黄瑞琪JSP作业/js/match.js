$(document).ready(function(){
	//获取长度
	function getLength(str){
 		return str.length;
    }
    //用户名
	$('.username').focus(function(){
		$('.userword').html("用户名只能包括英文字母，数字和下划线");
	});
	$('.username').blur(function(){
		//用户名为空
		var name_length = getLength(this.value);
		if(name_length == 0){
			$('.userword').html('用户名不能为空');
			// Name.className="lala";
		}
		//验证用户名
		var re = /^[a-z0-9_]+$/g;
		if(re.test(this.value)){
			$('.userword').html("");
		}
		else {
			$('.userword').html("用户名格式错误 ！");
			// Email.className="lala";
		}
	});
	$('.password').focus(function(){
		$('.pwdword').html("密码不超过8位！");
	});
	$('.password').blur(function(){
		var psw_length = getLength(this.value);
		if(psw_length == 0){
			$('.pwdword').html('密码不能为空！');
		}else if(psw_length > 8){
			$('.pwdword').html('密码不得超过8位');
		}else{
			$('.pwdword').html("");
		}
	});
	$('.button').click(function(){
		if($('.pwdword').html() != "" || $('.userword').html() != ""){
			alert("注册失败！！/(ㄒoㄒ)/~~");
			return;
		}
		alert("注册成功！！！O(∩_∩)O");
	});
});