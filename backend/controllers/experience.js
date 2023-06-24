const Experience = require('../models/experience');

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json({ experiences });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};