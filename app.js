var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
// var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')



app.set('json escape', true)
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  keys: ['1sdfa111dfdsafdfakljdskfhauih'],

  maxAge:  60 * 60 // 1 hour
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// will overwrite the js
app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = 'richard website'

app.use = require('./route');
// app.use(session({secret: 'ssshhhhh'}));


mongoose.connect('mongodb://localhost/express_db', {}, (err, res) => {
    if (err) {
        throw err;
    } else {
        // console.log('Connected the database');
    }
});
var db = mongoose.connection;


app.listen(3000);
console.log('Running on port 3000...')