/**
 * Created by bneu on 05.07.15.
 */

var mongoose = require('mongoose');

var DrinkSchema = require('drink.js');
var PersonSchema = require('person.js');

var drinkModel = mongoose.mode('drinkModel', DrinkSchema);
var personModel = mongoose.mode('personModel', PersonSchema);

var Schema = mongoose.Schema;

var TransactionSchema = Schema({
    person: {type: Schema.Types.ObjectId, ref: 'personModel'},
    drink: {type: Schema.Types.ObjectId, ref: 'drinkModel'},
    price: {type: Number, min: 0}
});

module.exports = mongoose.model('Drink', TransactionSchema);