/**
 * Created by bneu on 05.07.15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DrinkSchema = Schema({
    name: String
});

module.exports = mongoose.model('Drink', DrinkSchema);