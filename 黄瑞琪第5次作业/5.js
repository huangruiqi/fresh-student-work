var num = 0;
function lala(num){
document.getElementById("shuru").value += 
document.getElementById(num).value;
}
function yiyi(){
	document.getElementById("shuru").value = eval(
		document.getElementById("shuru").value); 
}
function kaka(){
	document.getElementById("shuru").value  = null;
}
function haha(){
	document.getElementById("shuru").value =
 document.getElementById("shuru").value .substring(0,document.getElementById("shuru").value.length-1);
} 
function everything(){
	document.getElementById("shuru").value.focus();
}