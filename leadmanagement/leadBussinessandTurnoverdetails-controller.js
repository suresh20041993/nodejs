var connection = require('../config');


exports.leadBussinessandTurnoverdetailsEntry = function(req,res){
    console.log(req.body);
    var leadId = req.body.leadId;
    var bussinessType = req.body.bussinessType;
    var userId = req.body.userId;
    
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_corporate_bussiness_details where leadId = '"+leadId+"'";
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
             
             var insertsql = "insert into ab_corporate_bussiness_details(leadId,bussinessType,userId,date)values('"+leadId+"','"+bussinessType+"','"+userId+"','"+today+"')";

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
                            "message":"Lead Business Details inserted sucessfully"
                               });
                         }
                         });
          }else{
            
            //var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
              
            var updatesql = "UPDATE ab_corporate_bussiness_details SET bussinessType = '"+bussinessType+"',userId = '"+userId+"', date = '"+today+"' where leadId = '"+leadId+"'";

         
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
                            "message":"Lead Business Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });





         var sql = "SELECT count(leadId) as count FROM ab_corporate_bussiness_details where leadId = '"+leadId+"'";
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
             
             var insertsql = "insert into ab_corporate_bussiness_details(leadId,bussinessType,userId,date)values('"+leadId+"','"+bussinessType+"','"+userId+"','"+today+"')";

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
                            "message":"Lead Business Details inserted sucessfully"
                               });
                         }
                         });
          }else{
            
            //var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
              
            var updatesql = "UPDATE ab_corporate_bussiness_details SET bussinessType = '"+bussinessType+"',userId = '"+userId+"', date = '"+today+"' where leadId = '"+leadId+"'";

         
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
                            "message":"Lead Business Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });



    }