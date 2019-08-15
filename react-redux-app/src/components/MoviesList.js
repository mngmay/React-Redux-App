import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData, addFavorite } from "../actions";

import Movie from "./Movie";
import MoviesNav from "./MoviesNav";

const MoviesList = props => {
  console.log(props);
  const addMovie = movie => {
    props.addFavorite(movie);
  };

  return (
    <>
      <MoviesNav
        favoritemovies={props.favoritemovies}
        getData={props.getData}
      />
      {props.isLoading && (
        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
      )}
      <div className="movies-list">
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
    favoritemovies: state.favoritemovies
  };
};

export default connect(
  mapStateToProps,
  { getData, addFavorite }
)(MoviesList);
