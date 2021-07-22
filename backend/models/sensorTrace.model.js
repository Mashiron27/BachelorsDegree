const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorTraceSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  sensorId: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const SensorsDb = mongoose.connection.useDb('Sensors');
const Trace = SensorsDb.model('SensorTrace', sensorTraceSchema);

module.exports = Trace;