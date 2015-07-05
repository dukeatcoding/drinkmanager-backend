var express = require('express');

var router = express.Router();

var Drink = require('../models/drink.js');

router.route('/')
    // Create a new Drink
    .post(function(req,res){
        var drink = new Drink();
        drink.name = req.body.name;
        drink.price = req.body.price;

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

router.route('/:drink_id')
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
            drink.price = req.body.price;

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

module.exports = router;