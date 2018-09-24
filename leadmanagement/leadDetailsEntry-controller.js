var connection = require('./../config');


exports.leadDetailsEntry=function(req,res){

    console.log(req.body);

    var leadId = req.body.leadId;
    var salutationCode = req.body.salutationCode;
    var firstName = req.body.firstName;
    var middleName = req.body.middleName;
    var lastName = req.body.lastName;
    var fatherName = req.body.fatherName;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var religion = req.body.religion;
    var maritalStatus = req.body.maritalStatus;
    var preferedLanguage = req.body.preferedLanguage;
    var community = req.body.community;
    var contactMobileNumber = req.body.contactMobileNumber;
    var contactEmail = req.body.contactEmail;
    var userId = req.body.userId;
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_lead_individual_details where leadId = '"+leadId+"'";
    console.log(sql);
      connection.query(sql, function (err, result) {
        if (err) {
          console.log("error ocurred",err);
          res.send({
            "code":400,
            "message":"error ocurred"
          })
        }else{
          console.log('The solution is: ', result);
          //console.log(result[0].count);
          if(result[0].count == '0'){

            var insertsql = "INSERT INTO ab_lead_individual_details(leadId,salutationCode,firstName,middleName,lastName,fatherName,gender,dob,religion,maritalStatus,preferedLanguage,community,contactMobileNumber,contactEmail,userId,entryDate) VALUES ('"+leadId+"','"+salutationCode+"','"+firstName+"','"+middleName+"','"+lastName+"','"+fatherName+"','"+gender+"','"+dob+"','"+religion+"','"+maritalStatus+"','"+preferedLanguage+"','"+community+"','"+contactMobileNumber+"','"+contactEmail+"','"+userId+"','"+today+"')";
                 
                console.log(insertsql);
                connection.query(insertsql, function (err, result) {
               if (err) {
                          console.log("error ocurred",err);
                            res.send({
                             "code":401,
                             "message":"error ocurred"
                          })
                        }else{
                           console.log("test2");
                           console.log('The solution is: ', result);
                           res.send({
                             "code":200,
                            "message":"Lead Details inserted sucessfully"
                               });
                         }
                         });
          }else{

            var updatesql = "update ab_lead_individual_details set salutationCode ='"+salutationCode+"',firstName ='"+firstName+"',middleName ='"+middleName+"',lastName ='"+lastName+"',fatherName='"+fatherName+"',gender='"+gender+"',dob='"+dob+"',religion='"+religion+"',maritalStatus='"+maritalStatus+"',preferedLanguage='"+preferedLanguage+"',community = '"+community+"',contactMobileNumber='"+contactMobileNumber+"',contactEmail ='"+contactEmail+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
            console.log(updatesql);
            connection.query(updatesql, function (err, result) {
                if (err) {
                          console.log("error ocurred",err);
                          res.send({
                            "code":402,
                            "message":"error ocurred"
                          })
                        }else{
                          console.log('The solution is: ', result);
                          res.send({
                            "code":200,
                            "message":"Lead Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });

}