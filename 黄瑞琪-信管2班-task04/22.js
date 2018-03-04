var grade=prompt("请输入考试成绩：");
if(grade>=90)
	{console.log("优秀");}
else if(grade>=80)
	{console.log("良好");}
else if(grade>=60)
	{console.log("合格");}
else
	{console.log("不合格");}
console.log("能被7整除的数是：");
var a;
var b;
for(a=7,b=0;a<=100;a+=7)
	{
		if(a%7==0)
			{console.log(a);
			b++;
			}		
	}
	console.log("能被7整除的个数是:");
	console.log(b);


window.onload=function  () {
	
   showTime();
}
 function checkTime(j){
     	if (j<10) {j='0'+j}
     		return j;
     }
 function showTime(){
    var now=new Date();
	var begin=new Date("2016/9/7,00:00:00");
	var cha=parseInt((now.getTime()-begin.getTime())/1000);
	var d=parseInt(cha/(60*60*24));
    var h=parseInt((cha/(60*60))%24);
    var m=parseInt((cha/60)%60);
    var S=parseInt(cha%60);
    m=checkTime(m);
    h=checkTime(h)
    S=checkTime(S);
    document.getElementById('p').innerHTML=''+d+'D&nbsp;'+h+'H&nbsp;'+m+'M&nbsp;'+S+'S';
    setTimeout(showTime,500);
}