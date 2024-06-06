const express = require('express');
const cors = require('cors');

const { connect } = require('../db/db');
const userRouter = require('../router/userRouter');

const app = express();
//  use MW to parse incoming json data
app.use(express.json());
//  use MW to parse incoming url encoded data
app.use(express.urlencoded({ extended: true }));
//  use MW to handle cors policy
app.use(cors());

// health point or actuator
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Server is up',
  });
});

// routes
app.use('/api/v1/users', userRouter);

// error handler for not found
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

connect();

module.exports = app;
