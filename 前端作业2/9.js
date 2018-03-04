$(function(){
	// 轮播效果
	var i=0;
	var j=6;
	var timer;
	function Show(){
		$('img').eq(i).fadeIn(100).
  		siblings('img').fadeOut(0);
  		$('img').removeClass('cssone');
		$('img').eq(j).addClass('cssone');
  		
  	}
	function showTime(){
    	timer = setInterval(function(){
    	$(".jiantouright").click();
    
  	},2000);
	}
	Show();
	showTime();

	// 切换按钮
	
	$(".jiantouleft").click(function(){
		
		if(i==0)
			{i=6;}
		i--;
		j=i+6
		Show();
	});
	
	$(".jiantouright").click(function(){
		
		if(i==5)
			{i=-1;}
		i++;
		j=i+6;
		Show();
	});
	// 点击缩略图切换图
	$("#boxa").hover(function(){
		clearInterval(timer);
		i=0;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(6)").addClass("cssone");	
		$("img:eq(0)").fadeIn(500);	
		$(".boxone img").eq(0).siblings("img").hide();
	},function(){
	 	showTime();
	});
	$("#boxb").hover(function(){
		clearInterval(timer);
		i=1;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(7)").addClass("cssone");
		
		$("img:eq(1)").fadeIn(500);
		$(".boxone img").eq(1).siblings("img").hide();
	},function(){
	 	showTime();
	});
	$("#boxc").hover(function(){
		clearInterval(timer);
		i=2;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(8)").addClass("cssone");
		$("img:eq(2)").fadeIn(500);	
		$(".boxone img").eq(2).siblings("img").hide();
	},function(){
	 	showTime();
	});
	$("#boxd").hover(function(){
		clearInterval(timer);
		i=3;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(9)").addClass("cssone");
		$("img:eq(3)").fadeIn(500);	
		$(".boxone img").eq(3).siblings("img").hide();
	},function(){
	 	showTime();
	});
	$("#boxe").hover(function(){
		clearInterval(timer);
		i=4;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(10)").addClass("cssone");
		$("img:eq(4)").fadeIn(500);
		$(".boxone img").eq(4).siblings("img").hide();
	},function(){
	 	showTime();
	});
	$("#boxf").hover(function(){
		clearInterval(timer);
		i=5;
		$("img:gt(5)").removeClass("cssone");
		$("img:eq(11)").addClass("cssone");
		$("img:eq(5)").fadeIn(500);
		$(".boxone img").eq(5).siblings("img").hide();	

	},function(){
	 	showTime();
	});
	
	


});