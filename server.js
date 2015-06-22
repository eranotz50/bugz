var express = require('express');
var path = require('path');
var http = require('http');
var https = require('https');


var app = express();

app.use(express.static(path.resolve(__dirname, 'client')));

//use body-phrser . https://codeforgeek.com/2014/09/handle-get-post-request-express-4/
var bugzillaUrl = 'https://landfill.bugzilla.org'; //  /login?login=eranotz65@gmail.com&password=asdf1234";
var login = '/login?login=eranotz65@gmail.com&password=asdf1234';
// read this docs  : https://nodejs.org/api/http.html#http_http_request_options_callback

var options = {
  host: bugzillaUrl,
  path: login
};

var callback = function (response){
        
        var body = '';
        
        response.on('error', function(e){
             console.log('error : ' + e);
        });
        
        response.on('data', function(d) {
            
            body += d;
            console.log('data : ' + body);
        });
        
        response.on('end', function() {
               console.log('end');
               console.log('data : ' + body);
            });
}

var loginUrl = 'https://landfill.bugzilla.org/bugzilla-tip/rest/login?login=eranotz65@gmail.com&password=asdf1234'



console.log(loginUrl);
var req =  https.get(loginUrl,callback);

req.on('error',function(e){
   console.log('error : ' + e ); 
});


app.get('/login', function(req,res){
     
     //res.send('login recived')
     
}); 

app.listen(8080);
