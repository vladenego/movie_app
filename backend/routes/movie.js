const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const genre = req.body.genre;
  const actors = req.body.actors;

  const newMovie = new Movie({
    title,
    description,
    duration,
    date,
    genre,
    actors
  });

  newMovie.save()
  .then(() => res.json('Movie added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   Movie.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:id').delete((req, res) => {
//   Movie.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Movies deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/update/:id').post((req, res) => {
//   Movie.findById(req.params.id)
//     .then(exercise => {
//       exercise.title = req.body.title;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Movie updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
