import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../reducers/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import { Settings } from '../../config/config';
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderMovies = useCallback(() =>
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    ), [movies]);

  const renderShows = useCallback(() =>
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    ), [shows]);

  return (
    <div className="movie-wrapper">
      <figure className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies()}</Slider>
        </div>
      </figure>
      <figure className="show-list">
        <h2>Shows</h2>
        <div className="movie-container"> <Slider {...Settings}>{renderShows()}</Slider>
        </div>
      </figure>
    </div>
  );
};

export default MovieListing;