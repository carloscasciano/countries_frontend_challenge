import { createStore } from "redux";

const INITIAL_STATE = {
  mainStatus: "Everything is looking good.",
  isFetching: false,
  isValid: false,
  countriesData: [],
};

function countriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      state.isFetching = true;
      return state;

    case "FETCH_POSTS_FAILURE":
      state.mainStatus = action.error;
      state.isFetching = false;
      return state;

    case "FETCH_POSTS_SUCCESS":
      state.isValid = true;
      state.countriesData = action.response;
      return state;

    default:
      return state;
  }
}

const store = createStore(countriesReducer);
export default store;
