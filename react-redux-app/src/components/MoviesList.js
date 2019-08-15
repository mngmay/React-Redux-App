import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Movie from "./Movie";

const MoviesList = props => {
  console.log(props);
  return (
    <div className="movie-list">
      {props.movies > 0 ? (
        props.movies.map(movie => <Movie movie={movie} />)
      ) : (
        <div>Our Theater is Empty :(</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isloading,
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(MoviesList);
