const axios = require("axios");

async function getCountriesData() {
  console.log("start");
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
      console.log(error);
    })
    .then((result) => {
      console.log(result.data.data.Country);
      console.log("completed");
    });
}

export { getCountriesData };
