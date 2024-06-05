const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'successful get',
    metadata: {
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    },
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful get by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    },
  });
});

router.post('/', (req, res, next) => {
  const { name } = req.body;
  res.status(201).json({
    message: 'successful post',
    metadata: {
      name,
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    },
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful put by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    },
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful delete by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    },
  });
});

module.exports = router;
