import {
  FETCH_MOVIES_DATA_FAILURE,
  FETCH_MOVIES_DATA_START,
  FETCH_MOVIES_DATA_SUCCESS
} from "../actions";

const initialState = {
  movies: [],
  isLoading: false,
  error: ""
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
    default:
      return state;
  }
};
