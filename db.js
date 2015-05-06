var mongoose = require("mongoose");
mongoose.connect("mongodb://ysf:ysf@ds039000.mongolab.com:39000/apillibre", function() {
    console.log('Connectat a mongodb');
});
module.exports = mongoose;
