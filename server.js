var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var http = require("http").Server(app);
var port = process.env.PORT || 10000;
var ip = process.env.IP || 'localhost';




// require("./controllers/sokeet")(http);
//require('./controllers/sokeet')(http);

app.use(require('./controllers/static'));
app.use('/api/llibres',require('./controllers/api/llibres/llibres')(http));
app.use('/api/users',require('./controllers/api/users'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/autors', require('./controllers/api/autors/autors'))

// app.listen(port, function () {
//     console.log('Server listening on  http://localhost:' + port);
// });
http.listen(port,ip, function () {
    console.log('Server listening on  http://localhost:' + port);
});
