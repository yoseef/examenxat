var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8888;
var app = express();

app.use(bodyParser.json());

app.use(require('./controllers/static'));
app.use('/api/llibres',require('./controllers/api/llibres/llibres'));
app.use('/api/users',require('./controllers/api/users'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/autors', require('./controllers/api/autors/autors'))

app.listen(port, function () {
    console.log('Server listening on  http://localhost:' + port);
});
