import React from 'react';
import './MovieList.css';

export default function MovieList(props){
  console.log(props.data);
  
  return( 
      <div className="movieList">
  
      {props.data.map((el) => {
        return (
          <div className="item">
            <h1 key={el._id}>{el.title}</h1>
            <h2>{el.description}</h2>
          </div>
        )
      })}
     
      </div>
  )
}
