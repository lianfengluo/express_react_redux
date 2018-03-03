var express = require('express');
var app = require('./app');

// var cookieParser = require('cookie-parser');

var API = module.exports = express.Router();

API.use = require('./api/user');
app.use('/api', API);
