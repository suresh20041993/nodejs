//var Cryptr = require('cryptr');
//var express=require("express");
var connection = require('./../config');

var nodemailer = require('nodemailer');
// cryptr = new Cryptr('myTotalySecretKey');
 
exports.leadCreation=function(req,res){

        console.log(req.body);

        var leadType=req.body.leadType;
        var leadName=req.body.leadName;
        var lead_mobileNumber=req.body.PhoneNumber;
        var lead_sourceChannel = req.body.email;
        var userId=req.body.userId;
       
        var today = new Date();
  
    // var leadDetails={
    //     "leadType": leadType,
    //     "leadName" : leadName,
    //     "lead_mobileNumber": lead_mobileNumber,
    //      "lead_sourceChannel": lead_sourceChannel,
    //     "userId": userId,
    //     //"password":encryptedString,
    //     "entryDate":today
    //     //"updated_at":today
    // }


/* Author is suresh Lead Creation */


    // connection.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
        var sql = "INSERT INTO ab_lead (leadType,leadName,lead_sourceChannel,lead_mobileNumber,userId,entryDate) VALUES ('"+leadType+"','"+leadName+"','"+lead_sourceChannel+"','"+lead_mobileNumber+"','"+userId+"','"+today+"')";
        connection.query(sql, function (err, result) {
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
                        "message":"Lead Created sucessfully"
                          });
                    }
                    });
}

            
      

              
