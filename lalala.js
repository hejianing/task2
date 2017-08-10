// window.onload=function(){
// 	var wrap=document.getElementById('wrap'),
// 	pic=document.getElementById('pic').getElementsByTagName("li"),
// 	list=document.getElementById('list').getElementsByTagName('li'),
// 	index=0,
// 	timer=null;
//  
// // 定义并调用自动播放函数
//  timer = setInterval(autoPlay, 2000);
//  
// // 鼠标划过整个容器时停止自动播放
//  wrap.onmouseover = function () {
//  clearInterval(timer);
//  }
//  
// // 鼠标离开整个容器时继续播放至下一张
//  wrap.onmouseout = function () {
//  timer = setInterval(autoPlay, 2000);
//  }
// // 遍历所有数字导航实现划过切换至对应的图片
//  for (var i = 0; i < list.length; i++) {
//  list[i].onmouseover = function () {
//  clearInterval(timer);
//  index = this.innerText - 1;
//  changePic(index);
//  };
//  };
//  
//  function autoPlay () {
//  if (++index >= pic.length) index = 0;
//  changePic(index);
//  }
//  
// // 定义图片切换函数
//  function changePic (curIndex) {
//  for (var i = 0; i < pic.length; ++i) {
//  pic[i].style.display = "none";
//  list[i].className = "";
//  }
//  pic[curIndex].style.display = "block";
//  list[curIndex].className = "on";
//  }
//  
//  };

// $(function(){


// //自动播放
// // var num=$('.child').length;
// var num=5;
// var now_num = 0 ;
// var clear = null ;
// $('.1:gt(0)').hide();

// function move(){
// 	if (now_num == num-1) {
// 		now_num ==-1 ;
// 	}
// 	$('.1').eq(now_num +1).fadeIn('slow').siblings('.1').fadeOut('slow');
// 	now_num++;
// }

// function returnphoto(){
// 	change = setInterval(function(){
// 		move()
// 	},3000);
// }
// returnphoto();

// //鼠标移动停止/开始运动
//  $('.lala').mouseover(function(){
//  	clearInterval(change);
//  })
//  //  $('.child').mouseover(function(){
//  // 	clearInterval(change);
//  // })
//  $('.an').mouseover(function(){
//  	clearInterval(change);
//  })


// $('.lala').mouseout(function(){returnphoto()})
//  // $('.child').mouseout(function(){returnphoto()})
// $('.an').mouseout(function(){returnphoto()})

// //鼠标点击小图

// // $('.child').click(function(){
// // 	var bigchange=$('.child').index(this);
// // 	$('.1').eq(bigchange).fadeIn('slow').siblings('.1').fadeOut('slow');
// // 	now_num=bigchange;
// // })

// // $('.child').click(function(){
// // var bigchange=$('.child').index(this);
// // $('.1').eq(bigchange).fadeIn('slow').siblings('.1').fadeOut('slow');
// //     now_num=bigchange;
// // })

// //点击箭头
// $('.an1').click(function(){
// 	if (now_num == 0) {now_num=num}
// $('.1').eq(now_num-1).fadeIn('slow').siblings('.1').fadeOut('slow');
// 	now_num--;
// })
// $('.an2').click(function(){
// 	move();
// })


// })
function openme(){
document.getElementById('div1').style.display='block';
document.getElementById('div2').style.display='block';

}
function closeme(){
document.getElementById('div1').style.display='none';
document.getElementById('div2').style.display='none';
}
function logo_in(){alert()
//验证
//转向...
//myform.action=""
//myform.submit()
closeme();
}

function openyou(){
document.getElementById('div3').style.display='block';
document.getElementById('div4').style.display='block';
}
function closeyou(){
document.getElementById('div3').style.display='none';
document.getElementById('div4').style.display='none';
}
function logo_in(){alert()
//验证
//转向...
//myform.action=""
//myform.submit()
closeme();
}





window.onload=function(){

	var input=document.getElementsByTagName("input");
	var name=input[0];

	var span=document.getElementsByTagName("span");
	var name_rng=span[0];


	name.onfocus=function(){
		name_rng.innerHTML="必填，必须是字母或下划线！"
	}

		name.onblur=function(){
		var place=/[^a-zA-Z0-9_]/g;
		if (this.value=="") {
			name_emmm.innerHTML="不能为空";
			name_emmm.style.color="red";
			name.style.border="1px solid lightred";
		}
		else if (place.test(this.value)) {
			name_emmm.innerHTML="必须是字母数字或下划线";
			name_emmm.style.color="red";
			name.style.border="1px solid lightred";
		}
		else{
			name_emmm.innerHTML="正确";
			name_emmm.style.color="green";
			name.style.border="1px solid lightred";
		}
	}

}









$(function(){



//鼠标移至小图变色
	// $(function(){
	// 	$('.child').mouseover(function(){
	// 		$(this).css({
	// 			'opacity':'0.8'
	// 		})
	// 	})
	// 	$('.child').mouseout(function(){
	// 		$(this).css({
	// 			'opacity':'1'
	// 		})
	// 	})
	// })

//自动播放
// var num=$('.child').length;
var num=5;
var now_num = 0 ;
var clear = null ;
$('.1:gt(0)').hide();

function move(){
	if (now_num == num-1) {
		now_num =-1 ;
	}
	$('.1').eq(now_num +1).fadeIn('slow').siblings('.1').fadeOut('slow');
	now_num++;
}

function returnphoto(){
	change = setInterval(function(){
		move()
	},2000);
}
returnphoto();

//鼠标移动停止/开始运动
 $('.lala').mouseover(function(){
 	clearInterval(change);
 })
 //  $('.child').mouseover(function(){
 // 	clearInterval(change);
 // })
   $('.an').mouseover(function(){
 	clearInterval(change);
 })


 $('.lala').mouseout(function(){returnphoto()})
 // $('.child').mouseout(function(){returnphoto()})
 $('.an').mouseout(function(){returnphoto()})

//鼠标点击小图

// $('.child').click(function(){
// 	var bigchange=$('.child').index(this);
// 	$('.1').eq(bigchange).fadeIn('slow').siblings('.1').fadeOut('slow');
// 	now_num=bigchange;
// })

// $('.child').click(function(){
// var bigchange=$('.child').index(this);
// $('.1').eq(bigchange).fadeIn('slow').siblings('.1').fadeOut('slow');
//     now_num=bigchange;
// })

//点击箭头
$('.an1').click(function(){
	if (now_num == 0) {now_num=num}
$('.1').eq(now_num-1).fadeIn('slow').siblings('.1').fadeOut('slow');
	now_num--;
})
$('.an2').click(function(){
	move();
})


//搜索
// $("input:eq(1)").click(function(){
// 	if($("input:eq(0)").val()==""){//判断是否为空
// 		alert("不能提交空内容！");
// 		}else{
// 			$("ul").append("<li>"+$("input:eq(0)").val()+"</li>");
// 			$(this).prev().val("");//清空输入框
// 			}
// 		})	




// window.onload = 
// function(){
// var oMsg = document.getElementById("msg");
// var oBtn = document.getElementById("btn");
// var oMsg_c = document.getElementById("msg_c");
// var oUl = document.createElement("ul");
// oMsg_c.appendChild(oUl);
// oBtn.onclick = function(){
// var sVal = oMsg.value;
// var oli = document.createElement("li");
// oli.innerHTML = sVal + " <span>删除</span>";
// var oli1 = oUl.getElementsByTagName("li");
// if(oli1.length>0){
// oUl.insertBefore(oli,oli1[0]);
// }else{
// oUl.appendChild(oli);
// }
// oMsg.value='';
// var oSpan = document.getElementsByTagName("span");
// for(var i=0; i<oSpan.length; i++){
// oSpan[i].onclick = function(){
// oUl.removeChild(this.parentNode);
// }
// }
// }
// }

})

window.onload = function(){
var oMsg = document.getElementById("msg");
var oBtn = document.getElementById("btn");
var oMsg_c = document.getElementById("msg_c");
var oUl = document.createElement("ul");
oMsg_c.appendChild(oUl);
oBtn.onclick = function(){
var sVal = oMsg.value;
// sVal==""||"a-z"||"A-Z"||"0-9"
if (sVal==""||(!/^[\u4e00-\u9fa5]+$/gi.test(sVal))){alert("输入错误，请重新输入！");}

else{
var oli = document.createElement("li");
oli.innerHTML = sVal ;
var oli1 = oUl.getElementsByTagName("li");
if(oli1.length>0){
oUl.insertBefore(oli,oli1[0]);
}else{
oUl.appendChild(oli);
}
oMsg.value='';
var oSpan = document.getElementsByTagName("span");
for(var i=0; i<oSpan.length; i++){
oSpan[i].onclick = function(){
oUl.removeChild(this.parentNode);
}
}

}

}
}
// + " <span>删除</span>"

	// $(function(){
	// 	$("input:eq(1)").click(function(){
	// 		if($("input:eq(0)").val()==""){//判断是否为空
	// 			alert("不能提交空内容！");
	// 		}else{
	// 			$("ul").append("<li>"+$("input:eq(0)").val()+"</li>");
	// 		$(this).prev().val("");//清空输入框
	// 		}
	// 	});	
	// });














