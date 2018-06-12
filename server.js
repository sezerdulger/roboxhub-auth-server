var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/src/main/resources/static/'));
server.listen(8090);
