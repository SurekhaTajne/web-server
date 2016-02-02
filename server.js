var express = require('express');
var app = express();
var middleware = require('./middleware-file.js');
var PORT = process.env.port || 3000;




app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
/* app.get('/', function (req, res) {
	res.send('Hello Express !');
});
 */


app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us Page !');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Server Started on port : ' + PORT);
});