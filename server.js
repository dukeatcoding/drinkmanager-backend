/**
 * Created by bneu on 05.07.15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.12:27017/drinks');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router to handle API routes
var router = require('./app/routes/routes.js')

// REGISTER ROUTES -------------------------------
// all API routes will be prefixed with /api
app.use('/api', router);

var index = require('./app/routes/index.js');
app.get('/', index);




var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Drink Server listening http://%s:%s', host, port)
});