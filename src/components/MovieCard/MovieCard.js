import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <section className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <figure className="card-inner">
          <img src={data.Poster} alt={data.Title} />
          <summary className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </summary>
        </figure>
      </Link>
    </section>
  );
};

export default MovieCard;