const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Unknown'
  }
}, {
  timestamps: true,
});

const SensorsDb = mongoose.connection.useDb('Sensors');
const Sensor = SensorsDb.model('Sensor', sensorSchema);

module.exports = Sensor;