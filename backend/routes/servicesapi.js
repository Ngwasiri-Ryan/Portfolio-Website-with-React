const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services');

router.get('/services', async (req, res) => {
  const services = await serviceController.listServices();
  res.json(services);
});

module.exports = router;