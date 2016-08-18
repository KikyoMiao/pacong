var schedule = require('node-schedule');
var main = require('./server');
var date = new Date();
var week = ['日','一','二','三','四','五','六']
var j = schedule.scheduleJob({hour: 15, minute: 20, dayOfWeek : [5, new schedule.Range(1, 4)]}, function(){
	main.init();
	console.log(date.getFullYear() + '年' + parseInt(date.getMonth() + 1) + '月' + date.getDate() + '日' + '(星期' + week[date.getDay()] + ') 已发送了喵~');
});