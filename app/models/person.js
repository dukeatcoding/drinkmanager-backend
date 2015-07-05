/**
 * Created by bneu on 05.07.15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = Schema({
    prename: String,
    lastname: String,
    balance: Number
});

module.exports = mongoose.model('Person', PersonSchema);