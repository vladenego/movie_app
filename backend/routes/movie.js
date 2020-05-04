const router = require('express').Router();
let Movie = require('../models/movie.model');
const path = require("path");
const multer = require("multer");

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


const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function(req, file, cb){
     cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("myImage");

// router.route('/upload').post((req, res) => {
//   upload(req, res, function (err) {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);//Here you get file.
//       /*Now do where ever you want to do*/
//       if(!err) {
//           return res.send(200).end();
//       }
//   })
// })




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
