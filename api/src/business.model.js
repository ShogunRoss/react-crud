const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  personName: {
    type: String
  },
  businessName: {
    type: String
  },
  businessGstNumber: {
    type: Number
  }
}, {
    collection: 'business'
  });

module.exports = mongoose.model('Business', Business);