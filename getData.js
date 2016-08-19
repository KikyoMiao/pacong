var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db('miao_test', new Server('localhost', 27017));
var timeOut = 15; //停盘时间 插入今天领涨板块；
var dealData = {
  findData : function(col,data){
    var $this = this;
    var timer = $this.getTime();
    var date = new Date();
    db.open(function(err, db){
      if(err) {
        console.log('Σ(っ °Д °;)っ 你他喵的忘记开启服务器辣');
      }else{
        db.collection(col,function(err,collection){
          if(err) throw  err;
          else{
            collection.find({'created_at' : {"$gte": timer}}).toArray(function(err,docs){
              if (!docs.length && date.getHours() >= timeOut) {
                collection.insert(data,function(insErr,insDoc){
                  if (insErr) {
                    throw 'mongodb' + insErr;
                  }else{
                    //有待补充嗷~~~
                  }
                });
              }else{
                //
              }
              db.close();
            });   
          }
        });
      }
    })
  },
  getTime : function(){
    return new Date(new Date().getFullYear() + '-' + Math.floor(new Date().getMonth() + 1) + '-' + new Date().getDate() + ' 00:00:00.0').getTime()
  }
}
module.exports = dealData;