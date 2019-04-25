const express = require ('express');
const mysql = require ('mysql');
const http = require('http');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const bodyParser = require ('body-parser');
const fs = require('fs');
const app = express();
const req = require('request');
const morgan= require('morgan');
const upload = require ("express-fileupload");
const multer = require('multer');
const mocha = require('mocha');
const supertest = require('supertest');



app.use(morgan('short'));
app.use(express.static('public', {
    extensions: ['html', 'htm'],
}));
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(upload());




//SERVER CONNECTION

app.listen(3000)
console.log('server started on port 3000');


//DATABASE CONNECTION

const connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : 'Mysql123,.',
          database : 'customers',
		  port	   : '3306'
});
 
connection.connect(function (error){
      if (error) {
            console.log ('Connection Error');
    } else {
            console.log ('Database Connected successfully');
    }
});


//POST FORM TO DATABASE (CONTACT US)

  app.post('/contact', function (req, res) {

  var sql = "INSERT INTO contact_us VALUES (null, '"+ req.body.name +"','"+ req.body.email +"', '"+ req.body.subject +"','"+ req.body.message +"', null)"
  
  connection.query(sql, function (error) {

    if (error) throw error;

        console.log(req.body);
        console.log ('values inserted successfully');
        //res.send ();
        res.redirect('/pages/contact.html');
        //res.sendFile(__dirname + '/public/pages/index.html');

        //connection.end();
  
  });
  
 // SEND MAIL FROM CONTACT

          //SEND EMAIL

       var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'prezboy2009@hotmail.com',
          pass: 'Microsoft123,.'
        }
      });
      
      var mailOptions = {
        from: 'prezboy2009@hotmail.com',
        to: 'Admin@sageoconsult.com',
        subject: 'New Enquiry',
        text: 'An enquiry has been made'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
      function newFunction() {
        return "Server started on port 3000";
      };
       

  
  });
   
    //POST FORM TO DATABASE (CAREERS)

    app.post('/careers', function (req, res) {

      
    var sql = "INSERT INTO careers VALUES (null,'"+ req.body.firstName +"','"+ req.body.lastName +"', '"+ req.body.email +"','"+ req.body.phone +"', '"+ req.body.street +"', '"+ req.body.city +"', '"+ req.body.state +"', '"+ req.body.zip +"',null)"
    
        connection.query(sql, function (error) {

         if (error) throw error;
   
            console.log(req.body);
            console.log ('Application recieved');
            res.redirect ('/pages/careers.html')

            //connection.end();
           

    });

                  //UPLOAD FILES from careers

                //app.post('/careers', function(req,res){
                  if(req.files){
                    var file = req.files.resumeUpload,
                        filename = file.name;
                    file.mv('./resume/' + filename,function(err){
                      if (err){
                        console.log(err)
                        res.send('error occurred')
                      }

                      // else{
                      //   res.sendFile(__dirname + '/public/pages/thanks.html');
                      // }
                    })
                  }
                //})

       //SEND EMAIL

       var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'prezboy2009@hotmail.com',
          pass: 'Microsoft123,.'
        }
      });
      
      var mailOptions = {
        from: 'prezboy2009@hotmail.com',
        to: 'Admin@sageoconsult.com',
        subject: 'New Enquiry',
        text: 'An Application has been submitted!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
      function newFunction() {
        return "Server started on port 3000";
      };
       

      });


