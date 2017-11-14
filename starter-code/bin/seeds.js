// Iteration #1
require('../config/drone-setup.js');

const DroneModel = require("../models/drone");

const droneInfo = [
  {
    droneName: "Alex",
    propellers: 4,
    maxSpeed: 20
  },

  {
    droneName: "And",
    propellers: 2,
    maxSpeed: 40
  },

  {
    droneName: "Larr",
    propellers: 4,
    maxSpeed: 50
  }
];

DroneModel.create(droneInfo)
.then( droneResults => {
  console.log(droneResults);
})
.catch( err  => {
  console.log(err);
});
