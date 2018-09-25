var connection = require('../config');


exports.leadPermanentAddressDetailEntry = function(req,res){
    console.log(req.body);
    var leadId = req.body.leadId;
  
    var accommodationtype  = req.body.accommodationtype;
    var buildingName  = req.body.buildingName;
    var buildingNo  = req.body.buildingNo;
    var streetName = req.body.streetName;
    var locality = req.body.locality;
    var city  = req.body.city;
    var state  = req.body.state;
    var postalCode  = req.body.postalCode;
    var leadYearofAddress  = req.body.leadYearofAddress;
    var areaType  = req.body.areaType;
    var userId = req.body.userId;
    
    //var count;
    var today = new Date();

    console.log(leadId);

    var sql = "SELECT count(leadId) as count FROM ab_constituent_address where leadId = '"+leadId+"' and addressType = '2'";
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
             
             var insertsql = "insert into ab_constituent_address(leadId,addressType,accommodationtype,buildingName,buildingNo,streetName,locality,city,state,postalCode,noOfYears,areaType,userId,entryDate)values('"+leadId+"','2','"+accommodationtype+"','"+buildingName+"','"+buildingNo+"','"+streetName+"','"+locality+"','"+city+"','"+state+"','"+postalCode+"','"+leadYearofAddress +"','"+areaType+"','"+userId+"','"+today+"')";

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
                            "message":"Lead Current Address Details inserted sucessfully"
                               });
                         }
                         });
          }else{
            
            //var updatesql = "update ab_lead_employment_details set occupation ='"+occupation+"',companyName ='"+companyName+"',designation ='"+designation+"',monthly_income ='"+monthly_income+"',annual_income='"+annual_income+"',yearofexperience='"+yearofexperience+"',userId ='"+userId+"',entryDate='"+today+"' where leadId = '"+leadId+"'";
              
            var updatesql = "UPDATE ab_constituent_address SET accommodationtype = '"+accommodationtype+"',"+ 
            "buildingName = '"+buildingName+"', buildingNo = '"+buildingNo+"', streetName = '"+streetName+"',"+
            "locality = '"+locality+"', city = '"+city+"', state = '"+state+"', postalCode = '"+postalCode+"',"+
            "noOfYears  = '"+leadYearofAddress+"',areaType = '"+areaType+"', userId = '"+userId+"', entryDate = '"+today+"' where leadId = '"+leadId+"' AND addressType = '2'";

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
                            "message":"Lead Current Address Details Update sucessfully"
                              });
                        }
                        });
          }


        }
        });

}