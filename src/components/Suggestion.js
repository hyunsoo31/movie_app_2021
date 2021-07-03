import React from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';
import imgfile from '../img/slate.jpg';


class Suggestion extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };

  getSuggestions = async (index) => {
    const {
      data: {
       data: {movies},
      },
    } = await axios.get("https://yts.mx/api/v2/movie_suggestions.json?movie_id=" + index);
    this.setState({movies, isLoading: false});
    
  };

  componentDidMount() {
    const {location, history} = this.props;
    if (location.state===undefined) {
      history.push('/');
    } else{
      this.getSuggestions(location.state.id);
    }
    
  }

  render() {
    const { isLoading, movies, test } = this.state;
    console.log({movies});
    console.log({test});
    return( 
    <section className = "container_suggestion">
      {isLoading ? (
        <div>
          <h1>Suggestions</h1>
     <ul class="prod-list">
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption2">
         <h2>movie 1</h2>
       </div>
     </li>
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption2">
         <h2>movie 2</h2>
       </div>
     </li>
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption2">
         <h2>movie 3</h2>
       </div>
     </li>
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption2">
         <h2>movie 4</h2>
       </div>
     </li>
   </ul>
   </div>
        ) : (
          <div>
            <h1>Suggestions</h1>
          <div className="movie__detail">
          <div className="container_suggestion2">
          {movies.map((suggestion) => (
       <Suggestions
        key = {suggestion.id}
        id = {suggestion.id}
        title = {suggestion.title}
        poster = {suggestion.medium_cover_image}
        year = {suggestion.year}
        rating = {suggestion.rating}
      
      />
    ))}
    </div>
    </div>
    </div>
      )}
    </section>
    );
  }
}
/*
getSuggestions = async (index) => {
  const {
    data: {
     data: {suggestions},
    },
  } = await axios.get("https://yts.mx/api/v2/movie_suggestions.json?movie_id=" + index);
  this.setState({suggestions, isLoading: false});
};

<div id="container">
<h1>Suggestions</h1>
{isLoading ? (
     <ul class="prod-list">
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption">
         <h2>movie 1</h2>
         <p>summary</p>
         <p>year</p>
       </div>
     </li>
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption">
         <h2>movie 2</h2>
         <p>summary</p>
         <p>year</p>
       </div>
     </li>
     <li>
       <img src= {imgfile} alt="" title="" /> 
       <div class="caption">
         <h2>movie 3</h2>
         <p>summary</p>
         <p>year</p>
       </div>
     </li>
   </ul>
) : (
  <h2>hi</h2>
//       <div>
//       {suggestions.map((suggestion) => (
//    <Suggestion
//     key = {suggestion.id}
//     id = {suggestion.id}
//     year = {suggestion.year}
//     title = {suggestion.title}
//     summary = {suggestion.summary}
//   />
// ))}
//     </div>
  )}
</div>

*/

export default Suggestion;