var express = require('express');
var router = express.Router();
const Book = require('../Book.model');
/* GET home page. */
router.get('/', function(req, res, next) {

	 Book.find()
    .then(books => {
  			res.render('index', { title: 'Express', bookdata: books });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });

});

module.exports = router;
