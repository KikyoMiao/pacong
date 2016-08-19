# 努力赚小鱼干の系列 - 雪球数据反爬虫分析
 
> 仅供本人炒股玩耍~ 无参考价值 =￣ω￣=

![此处输入图片的描述][1]

## Fiddler Install 

利用fiddler抓取雪球app数据 ( https://www.telerik.com/download/fiddler )

## Npm Install 

安装依赖包

```
superagent => http 库，可以发起 get 或 post 请求。
email-templates => 生成邮件模板, 可以使用jade, ejs等视图引擎。
nodemailer & nodemailer-smtp-transport => 发送邮件。
node-schedule => 用于设置定时任务。
mongodb 为方便后期添加分析数据模块, 添加了mongodb数据库。
```

## Anti-Anti-Spider

鉴于雪球有反爬虫策略，反反爬虫策略是依靠定向爬取源的反爬虫策略而定。
通过fiddler对xueqiu.com的数据分析, 这里采用的是动态修改cookie。
一些常用的方法：

 - IP代理 
 - Cookies
 - 限速访问 



## Functionality

 - 获取cookie, 由于app地址拒绝访问, 所以cookie的设置来自于xueqiu.com，其他数据则来源于api.xueqiu.com。
 - 获取涨停板模块信息, 这里只截取了前6个板块信息。
 - 获取今日重要新闻。
 - 编译ejs模块 ejs用于处理邮件模板信息。
 - 使用nodemailer 设置邮件信息 处理发送邮件模块。
 - 设置定时任务， 工作日下午15:16分发送邮件。

## Usage

最后运行：node index.js


  [1]: http://g.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a298b2f087f9125bc315d607c98.jpg