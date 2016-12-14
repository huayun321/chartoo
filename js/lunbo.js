$(function(){
	var lunbo = {
		//初始化轮播元素对象及方法调用
		init: function(){
			this.bannerWrapper = $('.top-right .banner-wrapper');
			this.imgWrapper = this.bannerWrapper.find('.img-wrapper');
			this.imgs = this.imgWrapper.find('img');
	
			this.imgHeight = this.imgs.eq(0).height();
			this.index = 0;
	
			//初始化定时器
			this.timer = null;
	
			//用于判断当前是否在运动  false 未运动  true 正在运动
			this.flag = false;
	
			//方法调用
			this.autoPlay();
			this.stopAuto();
			this.startAuto();
		},
		//自动播放
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.animate();
			},2000);
		},
		//鼠标悬停
		stopAuto: function(){
			var that = this;
			this.bannerWrapper.mouseenter(function(){
				clearInterval(that.timer);
			});
		},
		//鼠标离开banner盒子自动轮播
		startAuto: function(){
			var that = this;
			this.bannerWrapper.mouseleave(function(){
				that.autoPlay();
			});
		},
		//运动处理
		animate: function(num){
			var that = this;
			//判断当前是否正在运动
			if(this.flag){
				//撤销对index的操作
				this.index -= num;
				//中断  下面的代码不执行
				return;
			}
			//运动即将开始，将开关置为true
			this.flag = true;
	
			//如果到达右边界
			if(this.index > this.imgs.length-1){
				this.index = 0;
			}
			//如果到达左边界
			if(this.index < 0){
				this.index = this.imgs.length-1;
			}
			//运动开始
			this.imgWrapper.stop(true).animate({
				marginTop: -that.index * that.imgHeight
			},500,function(){
				//运动结束，将开关置为false
				that.flag = false;
			});
		}
	};
	lunbo.init();
})
