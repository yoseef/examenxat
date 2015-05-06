var db = require("../db");
var Autor = db.model('Autor', {
  nom: {
    type: String,
    required: true,
    unique: true
  },
  cognom: {
    type: String,
    required: true
  },
  cognom2: {
    type: String,
    required: false
  },
  any: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false,
    default: Date.now
  }
});
module.exports = Autor;
