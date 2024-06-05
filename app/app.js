const express = require('express');
const cors = require('cors');

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

module.exports = app;

/*
 use MW to handle cors policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Authorization, Origin, X-Requestd-With'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  }

  next();
});
*/
