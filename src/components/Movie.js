import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
// import imgfile from '../img/view.png';

function Movie({id, title, year, summary, summary_detail, poster, genres, big_poster, rating, runtime}) {
  if (summary.length >= 180){
    summary = summary.slice(0,180) + "..."
  };
  return (
    <div className="movie">
     <div className="caption">
      <Link
        to={{
          pathname: '/movie-detail',
          state: {id, year, title, summary, summary_detail, poster, genres, big_poster, rating, runtime},
        }}
      >
      <img src = {poster} alt = {title} title = {title} />
    <div className="movie__data">
      {/* <img src= {imgfile} alt="" title="" /> */}
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <p className="movie__summary">{summary}</p>
      {/* <p className="movie__summary">{summary.slice(0,180)}...</p> */}
      <ul className="movie__genres">
        {genres.map((genre, index) => {
          return <li key = {index} className="movie__genres">{genre}</li>;
        })}
      </ul>
    </div>
    </Link>
    </div>
  </div>
    );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;