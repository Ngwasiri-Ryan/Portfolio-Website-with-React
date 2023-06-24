const express = require('express');
const router = express.Router();
const Project = require('./models/project');

// GET all projects
router.get('/api/project/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ success: true, projects });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;