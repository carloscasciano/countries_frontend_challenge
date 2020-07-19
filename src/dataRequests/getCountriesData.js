import store from "../reduxLogic/store/store";
import {
  fetchRequestsStart,
  fetchRequestsError,
  fetchSuccess,
} from "../reduxLogic/actions/actions";
const axios = require("axios");

async function getCountriesData() {
  store.dispatch(fetchRequestsStart());
  await axios({
    url: "https://countries-274616.ew.r.appspot.com/",
    method: "post",
    data: {
      query: `
        query GetCountries {
            Country {
                _id
                name
                capital
                area
                population
                flag {
                    svgFile
                }
                topLevelDomains {
                    name
                }
                location {
                  
                  longitude
                  latitude
                }
                distanceToOtherCountries(first: 5) {
                    distanceInKm
                    countryName
                }

                }
              }
                `,
    },
  })
    .catch(function (error) {
      store.dispatch(fetchRequestsError());
    })
    .then((result) => {
      console.log("completed");
      store.dispatch(fetchSuccess(result.data.data.Country));
    });
}

export { getCountriesData };
