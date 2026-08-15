const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    make: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    registration_Number: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Car', carSchema);
