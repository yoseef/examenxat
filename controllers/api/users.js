var router = require('express').Router();
var jwt = require('jwt-simple');
var secretKey = 'ies2010!';
var bcrypt = require("bcrypt");
var User = require("../../models/user.js");
//router.use(require('body-parser').json());


router.get("/", function(req, res) {
  console.log('get /api/users');
  //Si el token d'autenticació és correcte enviem
  // el nom de l'usuari per provar que funciona.
  var token = req.headers['x-auth'];
  if (token) {

    var auth = jwt.decode(token, secretKey);
     console.log(auth);
    
    User.findOne({
      username: auth.username
    }, function(err, user) {
      res.status(200).json(user);
    });
  } else {
    res.status(401).json({
      "missatge": "bad token"
    });
  }
});

router.post('/', function(req, res, next) {
  //Afegim un usuari i contrasenya nous a la base de dades
  console.log('post /api/users : '+req.body);
  User.findOne({"username": req.body.username}, function(err, user) {
    if (err) return next(err);
    if (user) return res.status(409).json({
      "missatge": "User exists"
    });

    bcrypt.hash(req.body.password, 11, function(err, hash) {
      console.log(hash);
      var user = new User({username: req.body.username});
      user.password = hash;
      user.save(function(erro, user) {
        if (err) return next(err);
        res.status(201).json({
          "missatge": "User Created"
        });
      });
    });
  });
});

module.exports = router;
