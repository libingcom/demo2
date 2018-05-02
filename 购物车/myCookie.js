

//      *********  设置cookie   **********

function setCookie(key,value,day){       // 键   值    生存期
	
	if(day){		                    //有生存期参数
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie= key +"=" +value+";expires="+d;	
	}else{
		document.cookie= key +"=" +value;
	}	
}



//      *********  取cookie   ***********
function getCookie(key){ 
	if(document.cookie){
		var str = document.cookie;
		var arr = str.split("; ")
		for(var i=0;i<arr.length;i++){
			var item = arr[i].split("=");
			if(item[0]==key){
				return item[1];
			}
		}
		return "";      //有cookie 但没有键  返回空
	}	
	
		return "";      //没有cookie   返回空	
}






//    *********  删除cookie ***********
  

function removeCookie(key){
//	document.cookie = key + "='';expires = -1";//生存期 改为-1  删除
	setCookie(key,"",-1);	
}
