var express = require('express'); 

var path = require('path'); 

var app = express(); 

var bodyParser = require('body-parser'); 

var nodemailer = require('nodemailer'); 

app.use(express.static(path.join(__dirname, '/client'))); 
app.use(bodyParser.json()); 

app.listen(8000, function(){
	console.log('this is my portfolio'); 
});

// var smtpConfig ={
// 	host: 'smtp.gmail.com', 
// 	port: 465, 
// 	secure: true, 
// 	auth: {
// 		user: 'andrewhyeung@gmail.com', 
// 		pass: 'pass'
// 	}
// };

var smtpConfig = 'smtps://andrewhyeung%40gmail.com:pass@smtp.gmail.com';
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols


app.post('/email', function(req, res){
	var mailOptions = {
	    from:'"req.body.name" <req.body.email>', // sender address
	    to: 'andrewhyeung@gmail.com', // list of receivers
	    subject: req.body.subject, // Subject line
	    text: req.body.text, // plaintext body
	};
	console.log(mailOptions); 

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log('this is the ', error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}); 






