import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData, addFavorite, addWatched } from "../actions";

import Movie from "./Movie";
import MoviesNav from "./MoviesNav";

const MoviesList = props => {
  const [list, setList] = useState("all");
  console.log(list);

  console.log(props);
  const addMovie = (movie, type) => {
    type === "favorite" && props.addFavorite(movie);
    type === "watched" && props.addWatched(movie);
  };

  return (
    <>
      <MoviesNav setList={setList} getData={props.getData} />
      {props.isLoading && (
        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
      )}
      <div className="movies-list all">
        {props.movies.map(movie => (
          <Movie key={movie.id} movie={movie} addMovie={addMovie} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isloading,
    movies: state.movies,
    favoritemovies: state.favoritemovies,
    watchedmovies: state.watchedmovies
  };
};

export default connect(
  mapStateToProps,
  { getData, addFavorite, addWatched }
)(MoviesList);
