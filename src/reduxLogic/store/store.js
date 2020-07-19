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

    case "CHANGE_COUNTRY_INFO":
      const filteredCountry = state.countriesData.filter(
        (c) => c.name === action.countryName
      );
      filteredCountry[0].capital = action.data.capital;
      filteredCountry[0].area = action.data.area;
      filteredCountry[0].population = action.data.population;
      return state;

    default:
      return state;
  }
}

const store = createStore(countriesReducer);
export default store;
