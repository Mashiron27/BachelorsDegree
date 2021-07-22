const router = require('express').Router();
let Notification = require('../models/notification.model');

// Get all Notifications:
router.route('/').get((req, res) => {
  Notification.find()
    .then(notifications => res.json(notifications))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Specific Notificaiton:
router.route('/:id').get((req, res) => {
    Notification.findById(req.params.id)
    .then(notification => res.json(notification))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Notification:
router.route('/add').post((req, res) => {
  const severity = req.body.severity;
  const description = req.body.description;
  const newNotification = new Notification({
    severity,
    description
  });
  newNotification.save()
    .then(() => res.json('Notification added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;