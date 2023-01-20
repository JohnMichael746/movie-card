import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../reducers/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "All";
  const showText = "Good";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))

    dispatch(fetchAsyncShows(showText))

  }, [dispatch]);

  return (
    <>
      <MovieListing />
    </>
  );
};

export default Home;