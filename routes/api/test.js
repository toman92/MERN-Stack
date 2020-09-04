const express = require('express');
const router = express.Router();

// we will use this model to search, add, delete etc from db
const TestModel = require('../../models/TestModel');

// @route   POST api/test
// @desc    Adds some data to db
// @access  Public - we can make private later
router.post('/', async (req, res) => {
  // extract fields from req - js makes it easy
  // lets say the req has {name: 'Sean', email: 'sean@gmail.com', age: 20}
  // we can extract like this:
  const { name, email, age } = req.body;

  try {
    // create new model with request data
    let test = new TestModel({
      name,
      email,
      age,
    });

    // save the new model
    await test.save();

    // return it as a response
    res.json(test);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   GET api/test
// @desc    gets a record by name - pass name in within req
// @access  public
router.get('/', async (res, res) => {
  try {
    // get by name, lets say the user sends the name as a req
    const test = await TestModel.find({ name: req.body.name });

    res.json(test);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
