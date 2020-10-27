const router = require('express').Router();
//<--- IMPORT CAR MODEL --->//
let Car = require('../models/cars.model');

//<--- GET CAR OBJECT FROM DATABASE --->//
router.route('/').get((req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//<--- CREATE NEW CAR OBJECT --->//
router.route('/add').post((req, res) => {
  const owner = req.body.owner;
  const model = req.body.model;
  const make = req.body.make;
  const color = req.body.color;
  const registration_Number = req.body.registration_Number;

  const newCar = new Car({
    owner,
    model,
    make,
    color,
    registration_Number,
  });

  //<--- NEW CAR --->//
  newCar
    .save()
    .then(() => res.json('Car added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//<--- GET CAR OBJECT BY ID --->//
router.route('/:id').get((req, res) => {
  Car.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//<--- DELETE CAR OBJECT BY ID --->//
router.route('/:id').delete((req, res) => {
  Car.findByIdAndDelete(req.params.id)
    .then(() => res.json('Car deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//<--- UPDATE CAR OBJECT BY ID --->//

router.route('/update/:id').post((req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      car.owner = req.body.owner;
      car.model = req.body.model;
      car.make = req.body.make;
      car.color = req.body.color;
      car.registration_Number = req.body.registration_Number;

      car
        .save()
        .then(() => res.json('Car updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
