//echart1
var	data = [32, 34, 55, 52, 68];
var myChart1 = echarts.init(document.getElementById('echart1'));
var dataAxis = ["支付宝","微信","会员卡","现金","Pos机"];
var yMax = 100;
var dataShadow = [];
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
var option1 = {
    tooltip : {
    },
    xAxis: {
        type : 'category',
        axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        data: dataAxis,
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    yAxis: {
    		axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.1)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#23e444'},
                            {offset: 1, color: '#0c2e66'}
                        ]
                    ),
                    barBorderRadius: 10
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#0c2e66'},
                            {offset: 1, color: '#23e444'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
myChart1.setOption(option1);

//echart2
var myChart2 = echarts.init(document.getElementById('echart2'),'macarons');
var option2 = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['10','11','12','13','14','15','16'],
            axisLabel: {
	            textStyle: {
	                color: '#53fde3'
	            }
	        }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
	            textStyle: {
	                color: '#53fde3'
	            }
	        }
        }
    ],
    series : [
        {
            name:'营业额',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[4, 8, 16, 20, 27, 36, 41]
        }
    ]
};
myChart2.setOption(option2);


//echart3
var myChart3 = echarts.init(document.getElementById('echart3'),'macarons');
var option3 = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['WiFi','蓝牙','视频'],
        textStyle: {
            color: '#53fde3'
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['10','11','12','13','14','15','16'],
            axisLabel: {
	            textStyle: {
	                color: '#53fde3'
	            }
	        }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
	            textStyle: {
	                color: '#53fde3'
	            }
	        }
        }
    ],
    series : [
        {
            name:'WiFi',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[22, 30, 40, 33, 26, 46, 34]
        },
        {
            name:'蓝牙',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[23, 13, 17, 28, 28, 19, 31]
        },
        {
            name:'视频',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 25, 28, 30, 17, 21, 23]
        }
    ]
};
myChart3.setOption(option3);


//echart4
var myChart4 = echarts.init(document.getElementById('echart4'));
var dataAxis = ["周一","周二","周三","周四","周五","周六","周日"];
var data = [233, 135, 247, 330, 220, 356, 420];
var yMax = 500;
var dataShadow = [];
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
var option4 = {
    tooltip : {
    },
    xAxis: {
        type : 'category',
        axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        data: dataAxis,
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    yAxis: {
    		axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.1)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#f8d374'},
                            {offset: 1, color: '#133f70'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#133f70'},
                            {offset: 1, color: '#f8d374'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
myChart4.setOption(option4);

//echart5
var myChart5 = echarts.init(document.getElementById('echart5'));
var dataAxis = ["周一","周二","周三","周四","周五","周六","周日"];
var data = [310, 232, 247, 277, 159, 360, 445];
var yMax = 500;
var dataShadow = [];
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
var option5 = {
    tooltip : {
    },
    xAxis: {
        type : 'category',
        axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        data: dataAxis,
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    yAxis: {
    		axisTick: {
            show: false
        },
         axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#53fde3'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.1)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#6eccff'},
                            {offset: 1, color: '#225478'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#225478'},
                            {offset: 1, color: '#6eccff'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
myChart5.setOption(option5);



//echart6
var myChart6 = echarts.init(document.getElementById('echart6'),'macarons');
var option6 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['大门','电梯','游乐场','后门','其他'],
        textStyle: {
            color: '#53fde3'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'区域流量排行'},
                
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'大门'},
                {value:310, name:'电梯'},
                {value:234, name:'游乐场'},
                {value:135, name:'后门'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
myChart6.setOption(option6);


//echart7
var myChart7 = echarts.init(document.getElementById('echart7'),'macarons');
var option7 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['星力百货','耐克','星巴克','阿迪','其他'],
        textStyle: {
            color: '#53fde3'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'商户流量排行'},
                
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
            		{value:135, name:'星力百货'},
                {value:310, name:'耐克'},
                {value:335, name:'星巴克'},
                {value:234, name:'阿迪'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
myChart7.setOption(option7);



//echart8
var myChart8 = echarts.init(document.getElementById('echart8'),'macarons');
var option8 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:70, name:'女用户'},
                {value:30, name:'男用户'}
            ]
        }
    ]
};
myChart8.setOption(option8);



//echart9
var myChart9 = echarts.init(document.getElementById('echart9'),'macarons');
var option9 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
            		{value:40, name:'老用户'},
                {value:60, name:'新用户'}
            ]
        }
    ]
};
myChart9.setOption(option9);


$(function(){
	//时间
	var timeWrapper = $('.title .time');
	getTime();
	//每隔500毫秒更新一次时间（1000毫秒可能会出现跳秒现象）
	setInterval(getTime,500);
	function getTime(){
		var date = new Date();
		var hour = addZero( date.getHours() );
		var minutes = addZero( date.getMinutes() );
		var seconds = addZero( date.getSeconds() );
		var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六'); 
		var week = today[date.getDay()];  
		timeWrapper.html(hour + ' : ' + minutes + ' : ' + seconds);
		$('.data').html(week);
	}
	function addZero(num){
		if(num < 10){
			num = '0'+num;
		}
		return num;
	}
	
	
	//人数，营业额
	var people = parseInt($('.span1 b').html());
	var turnover = parseInt($('.span2 b').html());
	var timer = setInterval(function(){
		var num1 = parseInt(3*Math.random());
		people += num1;
		$('.span1 b').html(eval(people));
	},2000);
	var timer2 = setInterval(function(){
		var num2 = parseInt(100*Math.random());
		turnover += num2;
		$('.span2 b').html(eval(turnover));
	},4500);	
});


setInterval(function() {
	var num1 = parseInt(10*Math.random());
	var num2 = parseInt(15*Math.random());
	var num3 = parseInt(5*Math.random());
	var num4 = parseInt(7*Math.random());
	var num5 = parseInt(5*Math.random());
	option1.series[1].data[0] += num1;
	option1.series[1].data[1] += num2;
	option1.series[1].data[2] += num3;
	option1.series[1].data[3] += num4;
	option1.series[1].data[4] += num5;
	myChart1.setOption(option1);
	
	var length6 = option6.series[1].data.length;
	for(var i=0;i<length6;i++){
		var num6 = parseInt(30*Math.random()); 
		option6.series[1].data[i].value += num6;
	}
	myChart6.setOption(option6);
	
	var length7 = option7.series[1].data.length;
	for(var i=0;i<length7;i++){
		var num7 = parseInt(30*Math.random()); 
		option7.series[1].data[i].value += num7;
	}
	myChart7.setOption(option7);
	
	
	var num8 = parseInt(10*Math.random()); 
	option8.series[0].data[0].value += num8;
	var num08 = parseInt(5*Math.random()); 
	option8.series[0].data[1].value += num08;
	myChart8.setOption(option8);
	var option8Man = option8.series[0].data[1].value;
	var option8Woman = option8.series[0].data[0].value;
	var option8Sum = option8Man + option8Woman;
	var man = Math.round(option8Man / option8Sum * 100);
	var woman = Math.round(option8Woman / option8Sum * 100);
	$('.man').html(man);
	$('.woman').html(woman);
	
	var length9 = option9.series[0].data.length;
	for(var i=0;i<length9;i++){
		
	}
	var num9 = parseInt(10*Math.random()); 
	option9.series[0].data[1].value += num9;
	var num09 = parseInt(5*Math.random()); 
	option9.series[0].data[0].value += num09;
	myChart9.setOption(option9);
	var option9Old = option9.series[0].data[0].value;
	var option9New = option9.series[0].data[1].value;
	var option9Sum = option9Old + option9New;
	var old = Math.round(option9Old / option9Sum * 100);
	var newPeople = Math.round(option9New / option9Sum * 100);
	$('.old').html(old);
	$('.new').html(newPeople);
}, 3000);
