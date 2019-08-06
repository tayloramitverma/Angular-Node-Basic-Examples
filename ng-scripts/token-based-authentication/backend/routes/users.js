var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');


router.get('/username', function(req,res,next){
  return res.status(200).json('Hello');
})



module.exports = router;
