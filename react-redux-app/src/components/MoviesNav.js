import React from "react";

const MoviesNav = props => {
  return (
    <div className="nav-btns">
      <button onClick={props.getData}>All Movies</button>
      <button>Favorited Movies</button>
      <button>Watched Movies</button>
    </div>
  );
};

export default MoviesNav;
