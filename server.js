var fs = require('fs');
var path = require('path');
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var app = express();
var header = {
  'Host' : 'api.xueqiu.com',
  'Accept' : 'application/json',
  'Proxy-Connection': 'keep-alive',
  'Cookie' : 'xq_a_token=f5799e1cdd148c6292e3273c5b27074530748f85;u=6093493747',
  'User-Agent' : 'Xueqiu iPhone 7.6'
};

app.get('/', function (req, res, next) {
  superagent
  .get('https://api.xueqiu.com/stock/industry/list_by_ind_class.json?_=1469089870197&page=1&trace_id=60934937471C71CE78-9AC7-4517-9B8A-A582B9EC241D&x=0.296')
  .set(header)
  .end(function (err, sres) {
    res.send(sres.text);
  })
}).listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});