var connection = require('../config');


exports.leadEducationDetailEntry = function(req,res){
    console.log(req.body);
    var leadId = req.body.leadId;
    var institutename = req.body.institutename;
    var educationType = req.body.educationType;
    var educationalbranch = req.body.educationalbranch;
    var startyear = req.body.startyear;
    var endyear = req.body.endyear;
    var userid = userid;
    
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_lead_education_details where leadId = '"+leadId+"'";
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

             
             var insertsql = "insert into ab_lead_education_details(leadId,institutename,educationType,educationalbranch,startyear,endyear,userid,entryDate)values('"+leadId+"','"+institutename+"','"+educationType+"','"+educationalbranch+"','"+startyear+"','"+endyear+"','"+userid+"','"+today+"')";

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
                            "message":"Lead Education  Details inserted sucessfully"
                               });
                         }
                         });
          }else{
            
            //var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
              
            var updatesql = "update ab_lead_education_details SET institutename = '"+institutename+"',"+
            "educationType = '"+educationType+"',educationalbranch = '"+educationalbranch+"',"+
            "startyear = '"+startyear+"', endyear = '"+endyear+"', userid = '"+userid+"',"+
            "entryDate = '"+today+"' where leadId = '"+leadId+"'";

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
                            "message":"Lead Education Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });

}