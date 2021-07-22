const router = require('express').Router();
const bcrypt = require('bcryptjs');
let User = require('../models/user.model');

// Get all users:
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// User Profile:
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add user:
router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const rights = Number(req.body.rights);
  const newUser = new User({
    firstname,
    surname,
    email,
    username,
    password,
    rights
  });
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete user:
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update user:
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.firstname = req.body.firstname;
      user.surname = req.body.surname;
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user.rights = Number(req.body.rights);

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;