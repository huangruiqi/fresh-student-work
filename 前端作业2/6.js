 function getLength(str){
  return str.length;
 }
window.onload=function(){
	var Input=document.getElementsByTagName('input');
	var Name=Input[0];
	var Email=Input[1];
	var Tel=Input[2];
	var pwd=Input[3];
	var pwd2=Input[4];
	var button=Input[5];
	// var count=document.getElementsById("count");
	var aP=document.getElementsByTagName("p");
	var name_p=aP[0];
	var email_p=aP[1];
	var tel_p=aP[2];
	var pwd_p=aP[3];
	var pwd2_p=aP[4];
	var em=document.getElementsByTagName("em");
	var name_length=0;
	// var button=document.getElementsById("button");


Name.onfocus=function(){
	name_p.style.display="block";
	name_p.innerHTML='请保证5-20个字符';
	}
Name.onkeyup=function(){
	count.style.visibility="visible";
  name_length=getLength(this.value);
  count.innerHTML=name_length+"个字符";
  if(name_length==0){
   count.style.visibility="hidden";
  }
}
Name.onblur=function(){
	// var re=/[^\w\u4e00-\u9fa5]/g;
	if(name_length==0){
		name_p.innerHTML='不能为空';
		Name.className="lala";
	}
	else if(name_length>20||name_length<5){
		name_p.innerHTML='长度错误';
		Name.className="lala";
	}
	else{
		name_p.innerHTML='ok!';
		Name.className="yaya";
	}
	}
Email.onfocus=function(){
	email_p.style.display="block";
	email_p.innerHTML=
	'请输入你的常用邮箱';
}
Email.onblur=function(){
	var re=
	/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
	if(re.test(this.value)){
		email_p.innerHTML=
		'ok!';
		Email.className="yaya";
	}
	else {
		email_p.innerHTML=
		'请正确输入你的邮箱';
		Email.className="lala";
	}
}
Tel.onfocus=function(){
	tel_p.style.display="block";
	tel_p.innerHTML=
	'请正确输入';
}
Tel.onblur=function(){
	var reg=/^([0-9]{11})$/g;
	if(reg.test(this.value)){
		tel_p.innerHTML=
		'ok!';
		Tel.className="yaya";
	}
	else {
	tel_p.innerHTML=
	'请正确输入,亲~~';
	Tel.className="lala";
	}
}
pwd.onfocus=function(){
	pwd_p.style.display="block";
	pwd_p.innerHTML=
	'不能全为数字或字母';
}	
pwd.onkeyup=function(){
	pwd2_p.style.display="block";
if(this.value.length==0){
		em[0].className="ps";
		em[1].className="ps";
		em[2].className="ps";}
	else if(this.value.length<=5)
		{em[0].className="active";
		em[1].className="ps";
		em[2].className="ps";}
	else if(this.value.length>5&&this.value.length<=10){
		em[0].className="active";
		em[1].className="active"
		em[2].className="ps";
	}
	else if(this.value.length>10){
		em[0].className="active";
		em[1].className="active";
		em[2].className="active";
	}
}
pwd.onblur=function(){
	var te=/^[a-z]+$/gi;
	var ye=/^[0-9]+$/gi;
	if(te.test(this.value)){
	pwd_p.innerHTML='不符合规定';	
	pwd.className="lala";
	}
	else if(ye.test(this.value)){
	pwd_p.innerHTML='不符合规定';
	pwd.className="lala";	
	}
	else{
	pwd_p.innerHTML='ok!';
	pwd.className="yaya";	
	}		
}
pwd2.onblur=function(){
	if(this.value!=pwd.value){
	pwd2_p.innerHTML=
	'两次输入密码不一致';	
	pwd2.className="lala";
	}
	else{
	pwd2_p.innerHTML=
	'ok!';
	pwd2.className="yaya";		
	}
	}	
button.onclick=function(){
	for(i=0;i<5;i++){
	if(aP[i].innerHTML!="ok!")
	{alert("注册失败！！/(ㄒoㄒ)/~~");
	return;}
	else{}}
	alert("注册成功！！！O(∩_∩)O");
	}

  
}