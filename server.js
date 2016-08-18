var fs = require('fs'),
    ejs = require('ejs'),
    path = require('path'),
    express = require('express'),
    superagent = require('superagent'),
    config = require('./config'),
    getData = require('./getData'),
    app = express(),
    nodemailer = require('nodemailer'),
    smtpTransport = require("nodemailer-smtp-transport"),
    EmailTemplate = require('email-templates').EmailTemplate,
    templateDir = path.join(__dirname, 'templates'),
    monapi = new EmailTemplate(templateDir);

var email = config.email;
var transporter = nodemailer.createTransport(smtpTransport(email));
var sendmail = function(_html){
  var option = {
    from : 'pdm_email@163.com',
    to : '395820906@qq.com, 282561862@qq.com',
    subject : '【每天都要赚小鱼干】',
    attachments : [{
      filename : 'miao.jpg',
      path : './templates/miao.jpg',
      cid : 'miao.jpg'
    }],
    html : _html
  }
  transporter.sendMail(option, function(error, response){
      if(error){
          console.log("email fail: " + error);
      }else{
          console.log("email success: " + response.message);
      }
  });
}
 
var main = {
  init : function(){
    superagent
    .get(config.link.ind_url)
    .query({"_" : config.link.id, "page" : 1, "trace_id" : config.link.trace_id, "x" : config.link.x})
    .set(config.link.option)
    .end(function(err, sres){
      var obj = JSON.parse(sres.text);
      var data = obj.industryList.slice(0, 6);
      data.map(function(item,i){
        item.created_at = item.time
      })
      getData.findData('mycollection', data);
      config.apiInfo.ins = data;
      superagent
      .get(config.link.new_url)
      .query({"_" : config.link.id, "trace_id" : config.link.trace_id, "x" : config.link.x})
      .set(config.link.option)
      .end(function(nerr, nres){
        var obj = JSON.parse(nres.text);
        var newsList = [];
        obj.map(function(item,i){
          if (item.mark == 1) {
            newsList.push(item);
          };
        })
        getData.findData('newscollection', newsList);
        config.apiInfo.news = newsList;
        monapi.render(config.apiInfo, function(err, resluts){
          if(err){
            console.log('email: ' + err);
          }
          sendmail(resluts.html);
        });
      })
    })
  }
}

module.exports = main;