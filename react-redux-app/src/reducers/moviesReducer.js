import {
  FETCH_MOVIES_DATA_FAILURE,
  FETCH_MOVIES_DATA_START,
  FETCH_MOVIES_DATA_SUCCESS,
  ADD_FAVORITE_MOVIE
} from "../actions";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
  favoritemovies: []
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
      return {
        ...state,
        favoritemovies: [...state.favoritemovies, action.payload]
      };
    default:
      return state;
  }
};
