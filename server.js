/**
 * Created by bneu on 05.07.15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.2.109:27017/drinks');
var Drink = require('./app/models/drink.js');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router to handle API routes
var router = express.Router();


router.route('/drinks')
    // Create a new Drink
    .post(function(req,res){
        var drink = new Drink();
        drink.name = req.body.name;

        drink.save(function(err){
            if(err)
                res.send(err);

            res.json({message: 'Drink created'});
        });
    })

    // Get all the Drinks
    .get(function(req,res){
        Drink.find(function(err, drinks){
            if(err)
                res.send(err);

            res.json(drinks);
        });
    });

router.route('/drinks/:drink_id')
    .get(function(req,res){
        Drink.findById(req.params.drink_id, function(err, drink){
            if(err)
                res.send(err);
            res.json(drink);
        });
    })

    .put(function(req,res){
        Drink.findById(req.params.drink_id, function(err, drink){
            if(err)
                res.send(err);

            drink.name = req.body.name;

            drink.save(function(err){
                if(err)
                    res.send(err);

                res.json({message: 'Drink updated'});
            });
        });
    })

    .delete(function(req,res){
        Drink.remove({
            _id: req.params.drink_id
        }, function(err, drink){
            if(err)
                res.send(err);
            res.json({message : 'Drink successfully deleted'});
        });
    });

// REGISTER ROUTES -------------------------------
// all API routes will be prefixed with /api
app.use('/api', router);


app.get('/', function(req,res){
    res.send('Drink Server Mainpage - please refer to the manual to see the available endpoints');
});




var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Drink Server listening http://%s:%s', host, port)
});