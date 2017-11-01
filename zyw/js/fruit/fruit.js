/* 水果、蔬菜、肉禽、五谷杂粮 */
window.onload = function(){
	/* 图片轮播 */
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
	  //interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	gallery.slider().gotoItem(0);//跳转到第index张图片，index从0开始；
	mui.plusReady(function(){
		var self = plus.webview.currentWebview();
		var name = self.name;
		var fruitBtn = document.getElementById("fruitBtn");
		var vegetableBtn = document.getElementById("vegetableBtn");
		var rqBtn = document.getElementById("rqBtn");
		var cerealsBtn = document.getElementById("cerealsBtn");
		var firstcontain = document.getElementById("firstcontain");
		var secondcontain = document.getElementById("secondcontain");
		if (name == "toFruit") {							//水果
			
		}			
		if (name == "toVegetable") {						//蔬菜
			console.log("aaaaaaa");
				//document.getElementById("vegetableBtna").click();
				console.log("bbbbbbbbb");
			
		}
		if (name == "toRQ") {								//肉禽
			
		}
		if (name == "toCereals") {							//五谷杂粮
			
		}
	});
}