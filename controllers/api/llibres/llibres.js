var router = require('express').Router();
var Llibre = require("../../../models/llibre");

router.get("/", function(req, res, next) {
  console.log('get /api/llibres');
  Llibre.find()
    .populate('autors')
    .exec(function(err, llibre) {
      if (err) {
        return next(err);
      }
      res.json(llibre);
    });
  // Llibre.find(function(err, llibre) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json(llibre);
  // });
});
router.post("/", function(req, res, next) {
  var llibre = new Llibre(req.body);
  console.log(llibre);
  llibre.save(function(err, llibre) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send("El llibre : " + req.body.isbn + " s'ha creat!!");
  });
});
router.put("/", function(req, res, next) {
  console.log(req.body);
  Llibre.findByIdAndUpdate(req.body._id, req.body, function(err) {
    if (err) {
      return next(err);
    } else {
      res.status(201).json("put correcte" + req.body);
    }
  });
});


//URL api/llibres/:id
router.get("/:id", function(req, res, next) {
  Llibre.find({
    "isbn": req.params.id
  }, function(err, llibre) {
    if (err) {
      return next(err);
    }
    res.json(llibre);
    llibrecanvia = llibre
  });
});

router.post("/:id", function(req, res, next) {
  return res.status(400).send("Error you cant  Post!!");
});

router.put("/:id", function(req, res, next) {
  Llibre.update({
    "isbn": req.params.id
  }, {
    "isbn": req.body.isbn
  }, function(err) {
    if (err) {
      return next(err);
    }
    return res.status(201).send("nou ISBN " + req.body.isbn);
  });
});

router.delete("/:id", function(req, res, next) {
  console.log(req.params);
  Llibre.remove({
    isbn: req.params.id
  }, function(err) {
    if (err) {
      return next(err);
    } else {
      return res.status(201).send(req.params.id + " Deleted!!");
    }
  });
});

module.exports = router
