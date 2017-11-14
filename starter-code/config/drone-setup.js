const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true})
.then( () => {
  console.log("Mongoose connection Succesful!");
})
.catch( err => {
  console.log(err);
});
