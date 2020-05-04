import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import MovieList from './components/MovieList'
import Add from './components/Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [movieLister, setMovieLister] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/')
     .then((response) => {
     
      response = response.data
      setMovieLister(movieLister.concat(response));
      console.log(movieLister);
      
     })
     .catch((error) => {
        console.log(error);
     })
  }, []   
  )



  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <MovieList data={movieLister} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
