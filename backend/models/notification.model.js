const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  severity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const SensorsDb = mongoose.connection.useDb('Sensors');
const Notification = SensorsDb.model('Notification', notificationSchema);

module.exports = Notification;