import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import store from "../../reduxLogic/store/store";
import CountryDetails from "./CountryDetails/CountryDetails";
import MapDetails from './MapDetails/MapDetails'
import { CountryDetailsMainContainer } from "./countryDetailsDashboardStyles";
import Typography from "@material-ui/core/Typography";

export default function CountryDetailsDashbord() {
  const selectedCountryName = useParams().name;
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData.filter(
    (country) => country.name === selectedCountryName
  );

  return (
    <CountryDetailsMainContainer>
      {countriesAppData.map((country) => (
        <div key={country._id} className="details-card">
          <Typography variant="h2" gutterBottom>
            {country.name}
          </Typography>
          <img
            className="img-container"
            src={country.flag.svgFile}
            alt={country.name}
          />
          <div className="domain-container ">
            <Typography variant="body1">www.mydomain</Typography>
            <Typography variant="h5">
              {country.topLevelDomains[0].name}
            </Typography>
          </div>
          <CountryDetails country={country} />
          <MapDetails country={country}/>
          

          <Link to="/">
            <Typography variant="body1" gutterBottom>
              VOLTAR
            </Typography>
          </Link>
        </div>
      ))}
    </CountryDetailsMainContainer>
  );
}
