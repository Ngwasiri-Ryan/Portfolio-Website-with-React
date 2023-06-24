const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type:Image,
  }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;