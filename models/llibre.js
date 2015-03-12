var db = require("../db");
var Llibre = db.model('Llibre',{
	isbn: {type: String, required: true, unique: true},
	titol: {type: String, required: true},
	autors: {type: String, required: true},
	date: {type: Date, required: false, default: Date.now}
});
module.exports = Llibre;
