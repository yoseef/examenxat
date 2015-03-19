var router = require('express').Router();
var jwt = require('jwt-simple');
var secretKey = 'ies2010!';
var bcrypt = require("bcrypt");
var User = require("../../models/user.js");


router.post('/', function(req, res , next) {
  console.log('post /api/sessions');
  console.log(req.body);
  // Si la contrasenya enviada per l'usuari és correcte
  // enviem un token d'autentificació
  User.findOne({username: req.body.username})
    .select('username password')
    .exec(function(err, user) {
      if (err) return next(err);
      if (!user) return res.status(401).json({
        "missatge": "auth problem"
      });
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (err) return next(err);
        if (!valid) return res.status(401).json({
          "missatge": "auth problem"
        });
        var token = jwt.encode({
          username: user.username
        }, secretKey);
        res.status(200).json(token);
      });
    });
});
module.exports = router;
