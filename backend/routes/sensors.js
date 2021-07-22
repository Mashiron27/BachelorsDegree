const router = require('express').Router();
const Sensor = require('../models/sensor.model');

// Get all sensors:
router.route('/').get((req, res) => {
  Sensor.find()
    .then(sensors => res.json(sensors))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get specific sensor:
router.route('/:id').get((req, res) => {
  Sensor.findById(req.params.id)
    .then(sensor => res.json(sensor))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add sensor:
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const status = req.body.status;
  const newSensor = new Sensor({
    name,
    type,
    status,
  });
  newSensor.save()
    .then(() => res.json('Sensor added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update sensor:
router.route('/update/:id').post((req, res) => {
  Sensor.findById(req.params.id)
    .then(sensor => {
      sensor.name = req.body.name;
      sensor.type = req.body.type;
      sensor.status = req.body.status;

      sensor.save()
        .then(() => res.json('Sensor updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



// Delete user:
router.route('/:id').delete((req, res) => {
  Sensor.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sensor deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;