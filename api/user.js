var express = require('express');
var API = require('../route');
var user = express.Router();
// var session = require('express-session');
API.use('/user', user)



user.get('/signin', (req, res, next) => {
    console.log('test loginr');
    // req.session;
    res.send('test user');
})

user.get('/test', (req, res, next) => {
    // console.log(req.session.user);
    res.send(req.session.user);
})


user.get('/logout',function(req,res){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
     }
    )
})