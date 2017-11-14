const express = require('express');

// require the Drone model here
const DroneModel = require("../models/drone");

const router = express.Router();


router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .exec()
  .then( droneResults => {
    res.locals.listOfDrones = droneResults;
    console.log("BLAH BLAH BLAH BLAH BLAH BLAH --------------------------");
    res.render("drones/index");
  })
  .catch( err => {
    next(err);
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
