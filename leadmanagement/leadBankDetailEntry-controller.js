var connection = require('../config');


exports.leadBankDetailEntry = function(req,res){
    console.log(req.body);

    var leadId = req.body.leadId;
    var nameofbank = req.body.nameofbank;
    var branch = req.body.branch;
    var city = req.body.city;
    var nameofAccount = req.body.nameofAccount;
    var accountNumber = req.body.accountNumber;
    var ifsccode = req.body.ifsccode;
    var yearofopening = req.body.yearofopening;
  
    var userId = req.body.userId;
    
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_lead_bank_details where leadId = '"+leadId+"'";
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

            //var insertsql = "INSERT INTO ab_lead_employment_details(leadId,occupation,companyName,designation,monthly_income,annual_income,yearofexperience,userId,entryDate) VALUES ('"+leadId+"','"+occupation+"','"+companyName+"','"+designation+"','"+monthly_income+"','"+annual_income+"','"+yearofexperience+"','"+userId+"','"+today+"')";      
             
             var insertsql = "insert into ab_lead_bank_details(leadId,nameofbank,branch,city,nameofAccount,accountNumber,ifsccode,yearofopening,userId,entryDate)values('"+leadId+"','"+nameofbank+"','"+branch+"','"+city+"','"+nameofAccount+"','"+accountNumber+"','"+ifsccode+"','"+yearofopening+"','"+userId+"','"+today+"')";

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
                            "message":"Lead Bank Detail Details inserted sucessfully"
                               });
                         }
                         });
          }else{
            
            //var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
              
            var updatesql = "UPDATE ab_lead_bank_details SET nameofbank = '"+nameofbank+"',branch = '"+branch+"',city = '"+city+"',nameofAccount = '"+nameofAccount+"',accountNumber = '"+accountNumber+"',ifsccode = '"+ifsccode+"',yearofopening = '"+yearofopening+"',userId = '"+userId+"',entryDate = '"+today+"' WHERE leadId = '"+leadId+"'";

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
                            "message":"Lead Bank Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });

}