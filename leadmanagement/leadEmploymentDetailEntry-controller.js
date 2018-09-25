var connection = require('../config');


exports.leadEmploymentDetailsEntry=function(req,res){

    console.log(req.body);
    var leadId = req.body.leadId;
    var occupation = req.body.occupation;
    var companyName = req.body.companyName;
    var designation = req.body.designation;
    var monthly_income = req.body.monthly_income;
    var annual_income = req.body.annual_income;
    var yearofexperience = req.body.yearofexperience;
    var userId = req.body.userId;
    
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_lead_employment_details where leadId = '"+leadId+"'";
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

            var insertsql = "INSERT INTO ab_lead_employment_details(leadId,occupation,companyName,designation,monthly_income,annual_income,yearofexperience,userId,entryDate) VALUES ('"+leadId+"','"+occupation+"','"+companyName+"','"+designation+"','"+monthly_income+"','"+annual_income+"','"+yearofexperience+"','"+userId+"','"+today+"')";      
             
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
                            "message":"Lead Employment Details inserted sucessfully"
                               });
                         }
                         });
          }else{

            //var updatesql = "update ab_lead_employment_details set salutationCode ='"+salutationCode+"',firstName ='"+firstName+"',middleName ='"+middleName+"',lastName ='"+lastName+"',fatherName='"+fatherName+"',gender='"+gender+"',dob='"+dob+"',religion='"+religion+"',maritalStatus='"+maritalStatus+"',preferedLanguage='"+preferedLanguage+"',community = '"+community+"',contactMobileNumber='"+contactMobileNumber+"',contactEmail ='"+contactEmail+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
            
            var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
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
                            "message":"Lead Employment Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });

}