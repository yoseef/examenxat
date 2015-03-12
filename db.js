var mongoose = require("mongoose");
mongoose.connect("mongodb://ysf:ysf123@ds033059.mongolab.com:33059/llibre", function() {
    console.log('Connectat a mongodb');
});
module.exports = mongoose;
