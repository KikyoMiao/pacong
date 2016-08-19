var config = {
	apiInfo : {
		tit  : '每天都在努力赚小鱼干',
		name1 : '今日领涨板块',
		name2 : '股市直播',
		ins : [],
		news : []
	},
	link : {
		x : 0.74,
		id : '1469523955017',
		trace_id : '5230879256E7ABBBF1-F1EC-438C-9F63-959C1F21567F',
		new_url : 'https://api.xueqiu.com/statuses/livenews/latest.json',
		ind_url : 'https://api.xueqiu.com/stock/industry/list_by_ind_class.json',
		option : {
			'Host' : 'api.xueqiu.com',
			'Accept' : 'application/json',
			'Proxy-Connection': 'keep-alive',
			'Cookie': 'u=5230879256;',
			'User-Agent' : 'Xueqiu iPhone 7.6'
		}
	},
	email : {
		host : "smtp.163.com",
		secureConnection : true,
		port: 25,
		auth: {
			user: "pdm_email@163.com",
			pass: "pdm888"
		}
	},
	getToken : function(cookieArr){
	  return cookieArr.filter(function(val){
	    return ~val.indexOf('xq_a_token');
	  })
	}
}

module.exports = config;