var express = require('express');
var app = express();
var port = 8000;


app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(port, function (err, res) {
	if(err){
		console.log('Node server is not running..');
	}else{
		console.log('Node server is running..');
	}
    
});