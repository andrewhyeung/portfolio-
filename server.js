var express = require('express'); 
var path = require('path'); 
var app = express();
var bodyParser = require('body-parser'); 
var nodemailer = require('nodemailer'); 
var xoauth2 = require('xoauth2');
var pa = require('./app.js');

app.use(express.static(path.join(__dirname, '/client'))); 
app.use(bodyParser.json()); 

app.listen(8000, function(){
	console.log('this is my portfolio'); 
});

var smtpConfig ={
	service: "Gmail",
	host: 'smtp.gmail.com', 
	port: 465, 
	secure: true, 
	auth: {
		user: 'yeungportfolioandrew@gmail.com', 
		pass: pa.key 
	}, 
	tls:{
		secureProtocol: "TLSv1_method"
	}
};


var transporter = nodemailer.createTransport(smtpConfig);

app.post('/email', function(req, res){
	var mailOptions = {
		    from: req.body.name, 
		    to: 'andrewhyeung@gmail.com', // list of receivers 
		    subject: 'Portfolio contact message', // Subject line 
		    text: req.body.message + ' from ' + req.body.email
		  
		};
	console.log('this is the mail options', mailOptions); 

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log('this is the ', error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}); 






