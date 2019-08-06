var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req,res,next){
  User.findOne({email:req.body.email}).exec().then(function(doc){
  if(doc) {
    if(doc.isValid(req.body.password)){
        // generate token
        let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});

        return res.status(200).json(token);

    } else {
      return res.status(501).json({message:' Invalid Credentials'});
    }
  }
  else {
    return res.status(501).json({message:'User email is not registered.'})
  }
 }).catch(function(err){
   return res.status(501).json({message:'Some internal error'});
 });

});

router.post('/register',  function(req,res,next){
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now()
  });

  let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
});

module.exports = router;
