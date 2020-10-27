const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//<--- CAR SCHEMA OBJECT --->//
const carSchema = new Schema(
  {
    owner: { type: String, required: true },
    model: { type: String, required: true },
    make: { type: String, required: true },
    color: { type: String, required: true },
    registration_Number: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//<--- EXPORT CAR SCHEMA OBJECT --->//
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
