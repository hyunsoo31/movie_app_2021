import React from 'react';
import './Movie_detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;
    if (location.state===undefined) {
      history.push('/');
    }
  }
  render() {
    const {location} = this.props;
    if(location.state) {
    return (
      <div className="movie__detail">
        <div className="detailbox1">
        <img src = {location.state.big_poster} alt = {location.state.title} title = {location.state.title} />
        </div>
        <div className="detailbox2">
        <div className="movie__info__title"><span>Title</span></div>
        <div className="movie__info__year"><span>Year</span></div>
        <div className="movie__info__summary">Summary</div>
        <div className="movie__info__rating">rating</div>
        <div className="movie__info__runtime">runtime</div>
        <div className="movie__info__genres">genres</div>
        </div>
        <div className="detailbox3">
        <div className="movie__info__title">{location.state.title} </div>
        <div className="movie__info__year">{location.state.year}</div>
        <div className="movie__info__summary">{location.state.summary_detail}</div>
        <div className="movie__info__rating">{location.state.rating} / 10.0</div>
        <div className="movie__info__runtime">{location.state.runtime} min</div>
        <div className="movie__info__genres">
          {location.state.genres.map((genre, index) => {
           return <li key = {index} className="movie__genres">{genre}</li>;
        })}
        </div>
        </div>
      </div>
    )
    } else {
      return null;
    }
  }
}



export default Detail;