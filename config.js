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
		trace_id : '60934937471C71CE78-9AC7-4517-9B8A-A582B9EC241D',
		new_url : 'https://api.xueqiu.com/statuses/livenews/latest.json',
		ind_url : 'https://api.xueqiu.com/stock/industry/list_by_ind_class.json',
		option : {
			'Host' : 'api.xueqiu.com',
			'Accept' : 'application/json',
			'Proxy-Connection': 'keep-alive',
			'Cookie' : 'xq_a_token=f5799e1cdd148c6292e3273c5b27074530748f85;u=6093493747',
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
	}
}

module.exports = config;