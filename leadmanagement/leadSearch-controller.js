var connection = require('./../config');

var nodemailer = require('nodemailer');
// cryptr = new Cryptr('myTotalySecretKey');
 
exports.leadSearch=function(req,res){


    console.log(req.body);

    var leadName=req.body.leadName;
    
    connection.query("SELECT * FROM ab_lead where leadName like '%" + leadName +"%'", function (err, result, fields) {
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
              "message":result//"Lead search Display sucessfully"
                 
            });
          }
          });
      

}