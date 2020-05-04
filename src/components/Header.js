import React from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Header(){
  return(
    <div className="header">
      <div className="container">
      <header>
        <div className="logo"><p>
        <Link to="/"> Movie App</Link>
       
        </p></div>
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/add">Add</Link>
              </li>
              <li>
              <Link to="/upload">Upload</Link>
              </li>
            </ul>
          </nav>
      </header>
    </div>
    
    </div>
    
  )
}
