import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../reducers/movies/movieSlice';
import "./MovieDetail.scss";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, id]);

  return (
    <section className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <aside className="aside-left">
            <h1 className="movie-title">{data.Title}</h1>
            <p className="movie-rating">
              <span>
                IMDB Rating : {data.imdbRating}
              </span>
              <span>
                IMDB Votes :{" "}
                {data.imdbVotes}
              </span>
              <time>
                Runtime : {data.Runtime}
              </time>
              <time>
                Released Date : {data.Released}
              </time>
            </p>
            <summary className="movie-plot">{data.Plot}</summary>
            <div className="movie-info">
              <p>
                <span>Director</span>
                <span>{data.Director}</span>
              </p>
              <p>
                <span>Writer</span>
                <span>{data.Writer}</span>
              </p>
              <p>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </p>
              <p>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </p>
              <p>
                <span>Country</span>
                <span>{data.Country}</span>
              </p>
              <p>
                <span>Box Office</span>
                <span>{data.BoxOffice}</span>
              </p>
              <p>
                <span>Languages</span>
                <span>{data.Language}</span>
              </p>
              <p>
                <span>Rated</span>
                <span>{data.Rated}</span>
              </p>
              <p>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </p>
            </div>
          </aside>
          <aside className="aside-right">
            <img src={data.Poster} alt={data.Title} />
          </aside>
        </>
      )}
    </section>
  );
};

export default MovieDetail;