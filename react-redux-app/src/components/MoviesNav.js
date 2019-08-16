import React from "react";

const MoviesNav = props => {
  return (
    <div className="nav-btns">
      <button onClick={props.getData}>All Movies</button>
      <button onClick={props.setList("favoritemovies")}>
        Favorited Movies
      </button>
      <button onClick={props.setList("watchedmovies")}>Watched Movies</button>
    </div>
  );
};

export default MoviesNav;
