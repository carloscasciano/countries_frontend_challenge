import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../reduxLogic/store/store";
import { CountryDetailsMainContainer } from "./countryDetailsDashboardStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export default function CountryDetailsDashbord() {
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData;
  let selectedCountryName = useParams().name;

  return (
    <CountryDetailsMainContainer>
      {countriesAppData
        .filter((country) => country.name === selectedCountryName)
        .map((country) => (
          <div key={country._id} className="details-card">
            <Typography variant="h2" gutterBottom>
              {country.name}
            </Typography>
            <img
              className="img-container"
              src={country.flag.svgFile}
              alt={country.name}
            />
            <div className="form-container">
              <TextField label="Capital" value={country.capital} style={{marginBottom:"15px"}}/>
              <TextField label="Area km²" value={country.area} style={{marginBottom:"15px"}}/>
              <TextField label="Population" value={country.population} style={{marginBottom:"15px"}}/>
            </div>

            <Button variant="outlined">Change the World!</Button>

            <div className="domain-container ">
              <Typography variant="body1">www.mydomain</Typography>
              <Typography variant="h5">
                {country.topLevelDomains[0].name}
              </Typography>
            </div>
          </div>
        ))}
    </CountryDetailsMainContainer>
  );
}
