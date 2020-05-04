const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var fs = require('fs');
var Schema = mongoose.Schema;
var multer = require('multer');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



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



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



