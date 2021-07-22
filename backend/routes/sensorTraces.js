const router = require('express').Router();
let Trace = require('../models/sensorTrace.model');
const Sensor = require('../models/sensor.model');
/*
Trace.aggregate([{
  $lookup: {
    from: 'Sensor',
    localField: 'sensorId',
    foreignField: '_id',
    as: 'trace-full'
  }
}]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});*/

// Get all Traces:
/*
router.route('/').get((req, res) => {
    Trace.find()
    .then(traces => res.json(traces))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

router.route('/').get((req, res) => {
  var traceList = []; var obj1 = []; obj2 = [];
    Trace.find()
      .then(traces => {
        traces.forEach(trace => {
          Sensor.findById(trace.sensorId)
            .then(sensor => { obj2 = obj1.concat(sensor.name, trace.action, trace.createdAt); console.log(obj2);})
            .catch(err => console.log(err));
            obj1 = [];
          traceList.push(obj2);
        });
        res.json(traceList);
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

// Specific Trace:
router.route('/:id').get((req, res) => {
    Trace.findById(req.params.id)
    .then(trace => res.json(trace))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Trace:
router.route('/add').post((req, res) => {
    const sensorId = req.body.sensorId;
    const action = req.body.action;
    const newTrace = new Trace({
      sensorId,
      action,
    });
    newTrace.save()
      .then(() => res.json('Trace added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;