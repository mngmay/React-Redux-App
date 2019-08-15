import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <div class="ui card">
        <div class="content">
          <div class="header">{movie.title}</div>
          <div class="description">{movie.description}</div>
        </div>
        <div class="extra content">
          <div>Directed By: {movie.director}</div>
          <div>Released: {movie.release_date}</div>
          <span class="left floated like">
            <i class="add icon" />
            Watched
          </span>
          <span class="right floated star">
            <i class="star icon" />
            Favorite
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
