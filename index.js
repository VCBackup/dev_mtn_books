var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//req.body = '{"name": "Rick"}'
app.use(bodyParser.json());
//req.body = {name: 'Rick'}

//req = request{headers, body}
//res = response{}
//next

var port = 3000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});

