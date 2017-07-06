var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//req.body = '{"name": "Rick"}'
//#1
app.use(bodyParser.json());
//req.body = {name: 'Rick'}

//req = request{headers, body}
//res = response{}
//next

//#2
app.get('/books', function(req, res, next){

});
var port = 3000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});

