const router = require('express').Router();
const User = require('../models').User;

// Get single user
const singleUser = (req, res) => {
  User.findById(req.body.username)
  .then(user => {
    res.send(user);
  });
}

const newUser = (req, res) => {
  User.findorCreate(req.body)
  .then(user => {
    res.send(user)
  })
}

router.route('/')
.get(singleUser)

module.exports = router;
