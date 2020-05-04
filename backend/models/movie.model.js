const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  genre: {type: String, required: true},
  actors: {type: String, required: true},
  // img: { data: Buffer, contentType: String }
}, {
  timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
