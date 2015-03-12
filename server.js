var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/static'));
app.use('/api/llibres',require('./controllers/api/llibres/llibres'));

app.listen(8888, function () {
    console.log('Server listening on  http://localhost:8888');
});
