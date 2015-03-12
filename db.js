var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/llibre", function() {
    console.log('Connectat a mongodb');
});
module.exports = mongoose;
