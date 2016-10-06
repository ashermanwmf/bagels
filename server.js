'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var port = 3000; // port

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(express.static(__dirname + 'public/')); // static files

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
	res.render('App', {people: [{ name: 'Andrew', bagel: true }, { name: 'Jake', bagel: false }, { name: 'Kevin', bagel: false }, { name: 'Matt', bagel: false }]});
})

// change the status of a bagel eater so they can be in the queue
app.post('/addToQueue', upload.array(), function (req, res) {
	console.log(req.body);
	res.end('good job');
});

app.listen(port, function () {
	// listening
	console.log('CoolServer on port: ', port);
});
