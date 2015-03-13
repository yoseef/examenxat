var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8888;
var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/static'));
app.use('/api/llibres',require('./controllers/api/llibres/llibres'));

app.listen(port, function () {
    console.log('Server listening on  http://localhost:' + port);
});
