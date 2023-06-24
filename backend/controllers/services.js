const express = require('express');
const servicesRouter = require('../routes/services');

const router = express.Router();

router.use('/services', servicesRouter);

module.exports = router;