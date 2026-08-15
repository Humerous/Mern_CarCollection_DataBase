require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'test' ? 'tiny' : 'dev'));
app.use(express.json({ limit: '16kb' }));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    dataMode: process.env.DATA_MODE || (process.env.ATLAS_MONGO_URI ? 'mongo' : 'memory'),
  });
});

const carsRouter = require('./routes/cars');
app.use('/cars', carsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

async function connectDatabase() {
  const dataMode = process.env.DATA_MODE || (process.env.ATLAS_MONGO_URI ? 'mongo' : 'memory');

  if (dataMode !== 'mongo') {
    console.log('Using in-memory demo data store.');
    return;
  }

  if (!process.env.ATLAS_MONGO_URI) {
    throw new Error('ATLAS_MONGO_URI is required when DATA_MODE=mongo.');
  }

  await mongoose.connect(process.env.ATLAS_MONGO_URI);
  console.log('MongoDB database connection established successfully.');
}

async function startServer() {
  await connectDatabase();
  const port = Number(process.env.PORT) || 4000;
  return app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}

module.exports = { app, startServer };
