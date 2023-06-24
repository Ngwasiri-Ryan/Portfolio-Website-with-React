const express = require('express');
const Service = require('../models/services');

const router = express.Router();

router.post('/services', (req, res) => {
  const { name, description, price } = req.body;
  const service = new Service({ name, description, price });
  service.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;