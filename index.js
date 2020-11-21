const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','./views');


const myLogger = function (req, res, next) {
   let  a =  new Date()
      b=a.getDay()
      c=a.getHours()
      if(b!=7 && b!=0 && c>=9 && c<=20)
    
     next();
  }
  app.use(myLogger);

app.get('/', function(req, res){
    res.render('Home_page');
 });
 app.get('/Contact_us', function(req, res){
    res.render('Contact_us');
 });
 app.get('/Our_Services', function(req, res){
    res.render('Our_Services');
 });

 console.log('http://localhost:4000/')
 app.listen(4000)