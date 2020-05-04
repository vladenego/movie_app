const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const multer = require("multer");

const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// enable files upload
app.use(fileUpload({
  createParentPath: true
}));

//add other middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const movieRouter = require('./routes/movie');

app.use('/', movieRouter);

app.post('/upload', async (req, res) => {
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let avatar = req.files.avatar;
          
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          avatar = await avatar.mv('./uploads/' + avatar.name)
          //send response
          res.send({
              status: true,
              message: 'File is uploaded',
              data: {
                  name: avatar.name,
                  mimetype: avatar.mimetype,
                  size: avatar.size
              }
          });
      }
  } catch (err) {
      res.status(500).send(err);
  }
});



// const storage = multer.diskStorage({
//   destination: "../public/images",
//   filename: function(req, file, cb){
//      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
// }).single("myImage");






app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



