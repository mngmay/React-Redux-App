import {
  FETCH_MOVIES_DATA_FAILURE,
  FETCH_MOVIES_DATA_START,
  FETCH_MOVIES_DATA_SUCCESS,
  ADD_FAVORITE_MOVIE,
  ADD_WATCHED_MOVIE
} from "../actions";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
  favoritemovies: [],
  watchedmovies: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_MOVIES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: ""
      };
    case FETCH_MOVIES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_FAVORITE_MOVIE:
      if (!state.favoritemovies.includes(action.payload)) {
        return {
          ...state,
          favoritemovies: [...state.favoritemovies, action.payload]
        };
      } else {
        return {
          ...state
        };
      }
    case ADD_WATCHED_MOVIE:
      if (!state.watchedmovies.includes(action.payload)) {
        return {
          ...state,
          watchedmovies: [...state.watchedmovies, action.payload]
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};
