var express = require('express');	
var path = require('path');

var app = express();
var bodyParser = require('body-parser');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var computers = [];
var phones = [];

app.get('/', function (req, res) {
	res.render('index', {
		title: "product",
		items: phones,
		item: computers
	});

});

app.get('/phones', function (req, res) {
	res.send(phones);
});

app.get('/computers', function (req, res) {
	res.send(computers);
});

// app.get('/', function (req, res) {
// 	res.render('index');
// });

app.post('/computers', function (req, res) {
	computers.push({
		slot:computers.length+1,
		name:req.body.name,
		cpuName:req.body.cpuName,
		cpuFrequency:req.body.cpuFrequency,
		ramSize:req.body.ramSize,
		vsName:req.body.vsName
	})
	res.redirect('/');
});

app.post('/phones', function (req, res) {
	phones.push({
		slot:phones.length+1,
		name:req.body.name,
		screenSize:req.body.screenSize,
		storageSize:req.body.storageSize		
	})
	res.redirect('/');
});






app.listen(8000, function () {
	console.log('listening on 8000 port');
});