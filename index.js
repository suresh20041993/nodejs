var express=require("express");

const cors = require('cors');

var bodyParser=require('body-parser');

var jwt= require("jsonwebtoken");

var app = express();

var router=express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, authentication-token, application/json, charset=utf-8");
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});


var authenticateController = require('./controllers/authenticate-controller');

var appoinmentController = require('./controllers/appoinment-controller');

var appoinmentlistController = require('./controllers/appoinment-controller');

/*Lead Creations */
var leadCreationController  = require('./leadmanagement/leadCreation-controller.js');

/*Lead Display */
var leadDisplayController  = require('./leadmanagement/leadDisplay-controller.js');

/*lead Details */
var leadDetailsEntryController  = require('./leadmanagement/leadDetailsEntry-controller.js');
/* lead Employment details*/

var leadEmploymentDetailsEntryController  = require('./leadmanagement/leadEmploymentDetailEntry-controller.js');
/*lead current address details*/

var leadCurrentAddressDetailEntryController  = require('./leadmanagement/leadCurrentAddressDetailEntry-controller.js');

var leadPermanentAddressDetailEntryController  = require('./leadmanagement/leadPermanentAddressDetailEntry-controller.js');

var leadEducationDetailEntrycontroller = require('./leadmanagement/leadEducationDetailEntry-controller.js');



process.env.SECRET_KEY="purple";

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

/* route to handle login and registration */

app.post('/api/appoinment',appoinmentController.appoinment);

app.post('/api/appoinmentlist',appoinmentlistController.appoinmentlist);

app.post('/api/authenticate',authenticateController.authenticate);

app.post('/api/leadCreation',leadCreationController.leadCreation);

app.post('/api/leadDisplay',leadDisplayController.leadDisplay);

app.post('/api/leadDetailsEntry',leadDetailsEntryController.leadDetailsEntry);

app.post('/api/leadEmploymentDetailsEntry',leadEmploymentDetailsEntryController.leadEmploymentDetailsEntry);

app.post('/api/leadCurrentAddressDetailEntry',leadCurrentAddressDetailEntryController.leadCurrentAddressDetailEntry);

app.post('/api/leadPermanentAddressDetailEntry',leadPermanentAddressDetailEntryController.leadPermanentAddressDetailEntry);

app.post('/api/leadEducationDetailEntry',leadEducationDetailEntrycontroller.leadEducationDetailEntry);


app.post('/api/appoinment',appoinmentController.appoinment);

app.use('/secure-api',router);
// validation middleware
router.use(function(req,res,next){
    var token=req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,function(err,ress){
            if(err){
                res.status(500).send('Token Invalid');
            }else{
                next();
            }
        })
    }else{
        res.send('Please send a token')
    }
})
router.get('/home',function(req,res){
    res.send('Token Verified')
})
app.listen(3000);
