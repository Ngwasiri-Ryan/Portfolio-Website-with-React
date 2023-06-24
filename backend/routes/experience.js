const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');
//this is the GET route to get the experiences from the database
router.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json({ experiences });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

//this is the POST route to get the experiences from the database


router.post('/api/experiences/new', async (req, res) => {
  const experiences = req.body.experiences;

  try {
    const savedExperiences = await Experience.insertMany(experiences);
    res.json({ experiences: savedExperiences });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;