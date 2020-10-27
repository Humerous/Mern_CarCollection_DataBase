require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//<--- MIDDELWARE --->//
const app = express();

//<--- MIDDELWARE --->//
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//<--- ATLAS_MONGO_URI IS FOR THE CLOUD DATABASE - stored in a .env file --->//
const uri = process.env.ATLAS_MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//<--- FRONT END ROUTE TO BE USED --->//
const carsRouter = require('./routes/cars');
app.use('/cars', carsRouter);

//<--- PORT LISTENING ON PORT 4000 --->//
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
