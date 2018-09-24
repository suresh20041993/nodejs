var jwt=require('jsonwebtoken');

var connection = require('./../config');

exports.authenticate = function(req,res){

    //console.log('hhh');

    console.log(req.body);
    // console.log(password);
    var UserName=req.body.UserName;
    
    var Password=req.body.Password;
    
    console.log(UserName);    
    console.log(Password); 
    
   connection.query('SELECT * FROM users WHERE username = ?',[UserName], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == Password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
}
