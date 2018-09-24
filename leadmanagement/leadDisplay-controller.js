var connection = require('./../config');

var nodemailer = require('nodemailer');
// cryptr = new Cryptr('myTotalySecretKey');
 
exports.leadDisplay=function(req,res){


    
    connection.query("SELECT * FROM ab_lead order by leadId desc limit 10", function (err, result, fields) {
        if (err) {
            console.log("error ocurred",err);
            res.send({
              "code":400,
              "message":"error ocurred"
            })
          }else{
            console.log('The solution is: ', result);
            res.send({
              "code":200,
              "message":result//"Lead Display sucessfully"
                 
            });
          }
          });
      

}