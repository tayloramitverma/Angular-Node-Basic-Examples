var express = require('express');
var app = express();

app.set("view engine","jade")
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'testing_lara'
});
 
connection.connect();

app.get('/', function (req, res) {

  connection.query('SELECT * from blogs', function (error, results, fields) {
    if (error) throw error;
    res.render('BlogList', { type:'list', blogsList: results });
  });
/*
const employee = { blog_title: 'Winnie', blog_content: 'Australia' };
connection.query('INSERT INTO blogs SET ?', employee, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.id);
});
*/
});

app.get('/post/(:id)', function (req, res) {

  var postis = req.params.id;
  var sqlquery = 'SELECT * from blogs where id= '+postis;
  connection.query(sqlquery, function (error, results, fields) {
    if (error) throw error;
    res.render('BlogList', { type:'single', blogsList: results });
  });

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});