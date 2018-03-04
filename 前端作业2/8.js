window.onload=function(){
	var xhr = new XMLHttpRequest();
	
	xhr.open("get", "http://rap.taobao.org/mockjs/11201/getuser",true );
	xhr.send(null);
	xhr.onreadystatechange=function(){
		
		if(xhr.readyState==4){
		if((xhr.status>=200&&xhr.status<300)||xhr.status==304)
			{var json=JSON.parse(xhr.responseText);
			var str='';
			// var i;
			for(var i=0;i<4;i++)
			{str+='<div id="box">'+'<div id="picture">'
			+'<img src="'+json.picture+'" id="p">'+'</div>'
			+'<div id="content">'+'<span id="wenzi">'
			+'你的昵称:'+json.username+'</span>'+'<br/>'+'<span id="wenzi">'
			+'邮箱:'+json.useremail+'</span>'+'<br/>'+'<span id="wenzi">'
			+'学校:'+json.shcool+'</span>'+'<br/>'+
			'<span id="wenzi">'+'学号:'+json.shcoolnumber+'</span>'+
			'</div>'+'</div>';
			document.body.innerHTML= str;
			}
		}
			else{
				alert("request was unsuccessful:"+xhr.status);
			}
					
				
		}
		}
	}
	// var box = document.getElementById("box");
	// var w1=document.getElementById("wenzi1");
	// var w2=document.getElementById("wenzi2");
	// var w3=document.getElementById("wenzi3");
	// var w4=document.getElementById("wenzi4");
	// var w5=document.getElementById("wenzi5");
	// var i;
	// var str,json=;
	// for(i=0;i<4;i++){
	


	// }
		


