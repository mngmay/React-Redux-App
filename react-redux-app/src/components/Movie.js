import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <h4>{movie.title}</h4>
      <div>{movie.description}</div>
      <div>Directed By: {movie.director}</div>
      <div>Released: {movie.release_date}</div>
    </div>
  );
};

export default Movie;
