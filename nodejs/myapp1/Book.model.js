const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bookmodel = new Schema({
	title: String,
	author: String,
	category: String
});

module.exports = mongoose.model('Book', Bookmodel);