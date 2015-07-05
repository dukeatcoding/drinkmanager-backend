/**
 * Created by bneu on 06.07.15.
 */

var express = require('express');

var router = express.Router();

var Person = require('../models/person.js');


router.route('/')
    // Create a new Person
    .post(function(req,res){
        var person = new Person();
        person.name = req.body.name;
        person.price = req.body.price;

        person.save(function(err){
            if(err)
                res.send(err);

            res.json({message: 'Person created'});
        });
    })

    // Get all the Persons
    .get(function(req,res){
        Person.find(function(err, persons){
            if(err)
                res.send(err);

            res.json(persons);
        });
    });

router.route('/:person_id')
    .get(function(req,res){
        Person.findById(req.params.person_id, function(err, person){
            if(err)
                res.send(err);
            res.json(person);
        });
    })

    .put(function(req,res){
        Person.findById(req.params.person_id, function(err, person){
            if(err)
                res.send(err);

            person.name = req.body.name;
            person.price = req.body.price;

            person.save(function(err){
                if(err)
                    res.send(err);

                res.json({message: 'Person updated'});
            });
        });
    })

    .delete(function(req,res){
        Person.remove({
            _id: req.params.person_id
        }, function(err, person){
            if(err)
                res.send(err);
            res.json({message : 'Person successfully deleted'});
        });
    });

module.exports = router;