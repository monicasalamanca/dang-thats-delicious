const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  //res.send('Hey! It works!');
  // const test = {name:'monica',lastname:'salamanca',age:39};
  // res.json(test);
  //res.send(req.query.name);
  // res.json(req.query);
  res.render('hello');
});

module.exports = router;
