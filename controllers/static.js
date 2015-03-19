var express = require('express');
var router = express.Router()
var options = {
  root: __dirname + "/../layouts"
};
router.use(express.static(__dirname + "/../assets"));
//route.use(express.static(__dirname + "/../templates"));

router.get("/", function(req, res, next) {
  res.sendFile("llibre.html", options);
});

module.exports = router;
