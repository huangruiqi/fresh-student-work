 function  getRandomColor(){
  return '#'+
  Math.floor(Math.random()*16777215).toString(16); 
}
window.onload=function(){
	var a=document.getElementById("boxone");
	var b=document.getElementById("boxtwo");
	var c=document.getElementById("boxthree");
	var d=document.getElementById("boxfour");
	var e=document.getElementById("boxfive");
	var f=document.getElementById("boxsix");
	var g=document.getElementById("boxseven");
	var h=document.getElementById("boxeight");
	var i=document.getElementById("boxnine");
	var j=document.getElementById("boxa");
	var k=document.getElementById("boxb");
	var l=document.getElementById("boxc");
	var m=document.getElementById("boxd");
	var n=document.getElementById("boxe");
	var o=document.getElementById("boxf");
	var p=document.getElementById("boxg");
	// var box1=Box[0];
	// var box2=Box[1];
	// var box3=Box[2];
	// var box4=Box[3];
	// var box5=Box[4];
	// var box6=Box[5];
	// var box7=Box[6];
	// var box8=Box[7];
	// var box9=Box[8];
	// var box10=Box[9];
	// var box11=Box[10];
	// var box12=Box[11];
	// var box13=Box[12];
	// var box14=Box[13];
	// var box15=Box[14];
	// var box16=Box[15];
	// var box.style.color="#C3C1C6";

a.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
b.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
c.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
d.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
e.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
f.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
g.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
h.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
i.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
j.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
k.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
l.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
m.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
n.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
o.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}
p.onclick=function(){
	this.style.backgroundColor =getRandomColor();
}

}