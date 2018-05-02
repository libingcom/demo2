//头部  上部分
$(function(){
	//手机版二维码
	$(".ts1").bind({
		"mouseenter":function(){$("#shoujiban").css("display","block")},
		"mouseout":function(){$("#shoujiban").css("display","none")}
	})
	//微信版二维码
	$(".ts2").bind({
		"mouseenter":function(){$("#wxban").css("display","block")},
		"mouseout":function(){$("#wxban").css("display","none")}
	})
	
	//右边浮动
	$(".drift").find("a").eq(0).bind({
		"mouseenter":function(){
			$(this).css("background","url(../img/4321.jpg)")
			 		.find(".tan2").css("display","block")},
		"mouseout":function(){$(this).css("background","url(../img/1234.jpg)")
									.find(".tan2").css("display","none")}
	})
	
	$(".drift").find("a").eq(1).bind({
		"mouseenter":function(){$(this).css("background","url(../img/4321.jpg) 0 -60px")
										.find(".tan2").css("display","block")},
		"mouseout":function(){$(this).css("background","url(../img/1234.jpg) 0 -60px")
									.find(".tan2").css("display","none")
		}
	})
	$(".drift").find("a").eq(2).bind({
		"mouseenter":function(){$(this).css("background","url(../img/4321.jpg) 0 -120px")},
		"mouseout":function(){$(this).css("background","url(../img/1234.jpg) 0 -120px")},
		"click":function(){$("body,html").animate({"scrollTop":0},2000)}
	})
	$(document).scroll(function(){
		if($(document).scrollTop()==0){
			$("#back-to-top").css("display","none");
		}else{
			$("#back-to-top").css("display","block");			
		}
		
	})
	//登录切换
	$("#delu1").click(function(){
		$(this).addClass("hongs");
		$(this).parent()
				.siblings()
				.find("i")
				.removeClass("hongs");
	    $(".pt").css("display","block");
		$(".qj").css("display","none");		
	})
	
	$("#delu2").click(function(){
		$(this).addClass("hongs");
		$(this).parent()
				.siblings()
				.find("i")
				.removeClass("hongs");
		$(".qj").css("display","block");		
	    $(".pt").css("display","none");
				
	})
	//ad轮播
	var timer = setInterval(autoPlay,4000);	
	luNum = 0;
	function autoPlay(){
		
		luNum++;
		if(luNum==$("#luu").find("li").length){
			luNum=0;
		}
		$("#luu").find("li").eq(luNum-1).fadeOut(1000,function(){$("#luu").find("li").eq(luNum).css("display","block")})
	}
	
	
	var timerop = setInterval(fn,300);
	function fn(){
		 $(".diaa").eq(luNum).addClass("iaa4").siblings().removeClass("iaa4");
	}
	$(".diaa").mouseenter(function(){
		clearInterval(timer);
		clearInterval(timerop);
		var opp = $(this).index()-1;
		$("#luu").find("li").eq(opp).css("display","block").siblings().css("display","none");
		$(this).addClass("iaa4").siblings().removeClass("iaa4")
		
		
	})
	$(".diaa").mouseleave(function(){
		luNum = $(this).index()-1;
		timer = setInterval(autoPlay,4000);
		timerop = setInterval(fn,300);
	})
	
	
	
	
	
	
	//按钮切换
	var flag =false;
	
	$("#onle").mousedown(function(){
		flag = true;	
		clearInterval(timer);
		
		$("#luu").find("li").eq(luNum).fadeOut(1000,function(){
			
			if(luNum==0){luNum=$("#luu").find("li").length}
			
			$("#luu").find("li").eq(luNum-1).css("display","block");luNum--;})
	})
	$("#onle").mouseleave(function(){
		
		if(flag){
			timer = setInterval(autoPlay,4000);
		}
		flag = false;
	})

	$("#onrt").mousedown(function(){
		flag = true;
		clearInterval(timer);
		
		$("#luu").find("li").eq(luNum).fadeOut(1000,function(){
			
			if(luNum==$("#luu").find("li").length-1){luNum=-1}
			
			$("#luu").find("li").eq(luNum+1).css("display","block");luNum++;})
		
		
		
		
	})
	$("#onrt").mouseleave(function(){
		if(flag){
			timer = setInterval(autoPlay,4000);
		}
		flag =false;
	})
	
	//限时抢购轮播
	$(".mmple").click(function(){
				$("#lunbolist").css("margin-left",-1200)
		         $("#lunbolist").stop().animate({"margin-left":-12},700)
				$("#lunbolist li").each(function(){
					if(parseInt(Math.random()*2)==0){
						$(this).prependTo($(this).parent());
					}	
			});
	})
	
	$(".mmprt").click(function(){
					$("#lunbolist").css("margin-left",0)
		         $("#lunbolist").stop().animate({"margin-left":-1182},700)
		         
				$("#lunbolist li").each(function(){
					if(parseInt(Math.random()*2)==0){
						$(this).prependTo($(this).parent());
					}	
			});
	})
	 //猜你喜欢

	$(".likele").click(function(){
				$("#maybeLove").css("margin-left",-1200)
		         $("#maybeLove").stop().animate({"margin-left":0},700)
				$("#maybeLove li").each(function(){
					if(parseInt(Math.random()*2)==0){
						$(this).prependTo($(this).parent());
					}	
			});
	})
	
	$(".likert").click(function(){
					$("#maybeLove").css("margin-left",0)
		         $("#maybeLove").stop().animate({"margin-left":-1200},700)
		         
				$("#maybeLove li").each(function(){
					if(parseInt(Math.random()*2)==0){
						$(this).prependTo($(this).parent());
					}	
			});
	})
	
	
	//各大品牌logo
	$(".yid").find("img").css("opacity",0.6);
	$(".yid").bind({
		"mouseenter":function(){$(this).find("img").css("opacity",1)},
		"mouseleave":function(){$(this).find("img").css("opacity",0.6)}
	})
	
	
	
	//商品列表
	$("#leftlist").find("a").click(function(){
		location.href = "../html/goodslist.html"
	})
	
	//购物车
	$(".tya").click(function(){
		var arrP = $(".dip").text()
	   var arrP = arrP.substring(1);
	     gouN =parseInt($("#shulia").val());
	    var ogg = parseInt( getCookie("num"));
	    if(!isNaN(ogg)){
	    	var  nnN = gouN+ogg;
	    }else{
	    	nnN = gouN;
	    }
	 	
	   $("#shulia").val()
	   
	   setCookie("num",nnN,1000);
	   setCookie("pri",arrP,1000);
	})
	setInterval(function(){
		var nN = getCookie("num")
		if(!isNaN(nN)){
			$("#i_top").html(nN)
	 		$(".taa").html(nN)
		}else{
			$("#i_top").html(0)
	 		$(".taa").html(0)
		}
     
	},30)  
	
	   
	   
	   
	//进入购物车
	$("#car").click(function(){
		location.href = "shopcar.html"
	})
	
	$("#txtSkuNum_7016117362_7019188592").val(getCookie("num")) 
	var wer =   $("#txtSkuNum_7016117362_7019188592").val();
	$("#i_sub_7016117362_7019188592").click(function(){
		if(wer<0){
			wer =0;
		}
		$("#txtSkuNum_7016117362_7019188592").val(--wer);
		setCookie("num",wer,10000);
		$(".gj").html(wer*179);
		$("#sp_total").html(wer);
		$("#pay_money").html("￥"+wer*179);
		
	})
	
	$("#i_add_7016117362_7019188592").click(function(){
		
		$("#txtSkuNum_7016117362_7019188592").val(++wer);
		setCookie("num",wer,10000);
		$(".gj").html(wer*179)
		$("#sp_total").html(wer)
		$("#pay_money").html("￥"+wer*179);
	})
	
	
	
	
	
	
	//登录问题
	$("#mmm").click(function(){
		location.href = "../html/login.html"
	})
	var top = location.href;
	top = top.split("?")[1]
	if(top==undefined){
		$("#rt1_1").find("i").html("未登录,前去登录！！")
	}else{		
		
		top = top.split("=")[1];
		$("#rt1_1").find("i").html("欢迎用户"+top+"登录！！")
		$("#mmm").css("display","none")
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
