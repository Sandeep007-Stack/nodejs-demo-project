var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8089);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));

require('./app/routes')(app);

http.createServer(app).listen(app.get('port'), function () {
	console.log('System ' + app.get('port') + ' Start Node JS Project');
});
