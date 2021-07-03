import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';



class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  onClickHandler(){
    this.getMovies("download_count");
  }
  onClickHandler2(){
    this.getMovies("like_count");
  }
  onClickHandler3(){
    this.getMovies("rating");
  }



  getMovies = async (string) => {
    const{
      data: {
        data: {movies},
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=" + string);
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    // 영화 데이터 로딩!
   this.getMovies("year");
  }

  render() {
    const { isLoading, movies } = this.state;
    console.log({movies});
    return( 
    <section className = "container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
          <div>
          <div className="button_menu">
          <button onClick={() => this.onClickHandler()}>Download Count</button>
          <button onClick={() => this.onClickHandler2()}>Like Count</button>
          <button onClick={() => this.onClickHandler3()}>Rating</button>
          </div>
          <div className="movies">
          {movies.map((movie) => (
       <Movie
        key = {movie.id}
        id = {movie.id}
        year = {movie.year}
        title = {movie.title}
        summary = {movie.summary}
        summary_detail = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        big_poster = {movie.large_cover_image}
        rating = {movie.rating}
        runtime = {movie.runtime}
      />
    ))}
    </div>
          </div>
      )}
    </section>
    );
  }
}

export default Home;