import React from "react";

const Movie = ({ movie, addMovie }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{movie.title}</div>
        <div className="description">{movie.description}</div>
      </div>
      <div className="extra content">
        <div>Directed By: {movie.director}</div>
        <div>Released: {movie.release_date}</div>
        <span className="left floated like">
          <i className="add icon" />
          Watched
        </span>
        <span className="right floated star">
          <i className="star icon" onClick={e => addMovie(movie)} />
          Favorite
        </span>
      </div>
    </div>
  );
};

export default Movie;
