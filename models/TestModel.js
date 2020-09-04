const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// each field is a field in the database
// each has to be given a type. they can be made mandatory etc.
const TestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  hobbies: {
    type: [String]
  }
});

// the nameofcollection is the database collection the schema will be stored to
// the schema is just a way to structure the data 
module.exports = mongoose.model('nameofcollections', TestSchema)