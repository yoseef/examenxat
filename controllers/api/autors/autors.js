var router = require('express').Router();
var Autor = require("../../../models/autor");

router.get("/", function(req, res, next) {
  Autor.find(function(err, autor) {
    if (err) {
      return next(err);
    }
    res.json(autor);
  });
});
router.post("/", function(req, res, next) {
  var autorToSave = new Autor(req.body);
  console.log(autorToSave);
  autorToSave.save(function(err, autor) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send("S' ha creat l' autor: " + autor.nom);
  });
});
router.put("/", function(req, res, next) {
  console.log('put api/autor ' + req.body);
  Autor.findByIdAndUpdate(req.body._id, req.body, function(err) {
    if (err) {
      return next(err);
    } else {
      res.status(201).json("Autor actualitzat correctament!");
    }
  });
});
router.delete("/:id", function(req, res, next) {
  console.log('autor : remove by id');
  Autor.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      return next(err);
    } else {
      return res.status(201).send(req.params.id + " Deleted!!");
    }
  });
});

module.exports = router
