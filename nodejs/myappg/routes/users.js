var express = require('express');
var router = express.Router();

const api_helper = require('../API_helper')

/* GET users listing. */
router.get('/', function(req, res, next) {

  api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })

});

router.get('/detail/:userId', function (req, res) {

	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.send(req.params.userId);
});



module.exports = router;
