import React from 'react';
// import axios from 'axios';
import './Suggestions.css';
import PropTypes from 'prop-types';



function Suggestions({id, title, poster, year, rating}) {
//  console.log(title2);

  return (
    <ul class="prod-list">
    <li>
      <img src= {poster} alt="" title="" /> 
      <div class="caption">
        <h2>{title}</h2>
        <p>({year})</p>
        <br></br>
        <br></br>
        <p>★ {rating}</p>
      </div>
    </li>
  </ul>
   
  );
}

Suggestions.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};


export default Suggestions;