/**
 * Created by bneu on 05.07.15.
 */

var express = require('express');
var router = express.Router();

var drinks = require('./drinks.js');
router.use('/drinks',drinks);

var persons  = require('./persons.js');
router.use('/persons',persons);

module.exports = router;