import axios from "axios";

export const FETCH_MOVIES_DATA_START = "FETCH_MOVIES_DATA_START";
export const FETCH_MOVIES_DATA_SUCCESS = "FETCH_MOVIES_DATA_SUCCESS";
export const FETCH_MOVIES_DATA_FAILURE = "FETCH_MOVIES_DATA_FAILURE";
export const ADD_FAVORITE_MOVIE = "ADD_FAVORITE_MOVIE";
export const ADD_WATCHED_MOVIE = "ADD_WATCHED_MOVIE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_MOVIES_DATA_START });
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        dispatch({ type: FETCH_MOVIES_DATA_SUCCESS, payload: res.data });
      })
      .catch(err =>
        dispatch({ type: FETCH_MOVIES_DATA_FAILURE, payload: err.response })
      );
  };
};

export const addFavorite = movie => {
  return { type: ADD_FAVORITE_MOVIE, payload: movie };
};

export const addWatched = movie => {
  return { type: ADD_WATCHED_MOVIE, payload: movie };
};
