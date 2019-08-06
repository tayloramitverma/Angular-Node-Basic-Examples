var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const port = 3000;

const mongo_uri = 'mongodb://localhost:27017';

let db;
let collection;
let postcollection;

MongoClient.connect(mongo_uri, { useNewUrlParser: true, poolSize: 10 })
  .then(client => {
    db = client.db('mytest_db');
    collection = db.collection('users');
    postcollection = db.collection('post');
  })
  .catch(error => console.error(error));


app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/index.html');

    collection.find({})
    .toArray()
    .then(response => res.status(200).json(response))
    .catch(error => console.error(error));

});


app.get('/createuser', function(req, res) {

	var myobj = { name: "Amit V", email: "testav@gmail.com", phone: "5555555" };
	collection.insertOne(myobj)
	.then(response => res.status(200).json(response))
	.catch(error => console.error(error));

});

app.get('/createpost', function(req, res) {

	var myobj = { title: "Company Inc", content: "Highway 37", user_id: "5cd910b0b1aa2b2b2488adbc" };
	postcollection.insertOne(myobj)
	.then(response => res.status(200).json(response))
	.catch(error => console.error(error));

});

app.get('/users', function(req, res) {

/*	collection.findOne({}, function(err, result) {
    if (err) throw err;
    res.json(result.name);
  	});*/

collection.aggregate([
    { $lookup:
       {
         from: 'post',
         localField: '_id',
         foreignField: 'user_id',
         as: 'userdatais'
       }
     },
     { $project : { name : 1, phone: 1 } },
     { $limit: 2 }
    ]).toArray(function(err, result) {
    	if (err) throw err;
    	res.json(JSON.stringify(result));
  	});

/*  	collection.distinct("name")
  	.then(response => res.status(200).json(response))
	.catch(error => console.error(error));*/


});


app.get('/hello', function (req, res) {
    res.sendFile(__dirname + '/html1.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(port, function () {
    console.log('Node server is running..');
});
