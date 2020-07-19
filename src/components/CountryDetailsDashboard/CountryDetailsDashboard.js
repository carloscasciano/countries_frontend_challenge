import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import store from "../../reduxLogic/store/store";
import Map from "../Map/Map";
import { CountryDetailsMainContainer } from "./countryDetailsDashboardStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function CountryDetailsDashbord() {
  const selectedCountryName = useParams().name;
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData.filter(
    (country) => country.name === selectedCountryName
  );

  console.log("countriesAppData", countriesAppData);

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
          <div className="area-organizer">
            <div>
              <div className="form-container">
                <TextField
                  label="Capital"
                  value={country.capital}
                  style={{ marginBottom: "15px" }}
                />
                <TextField
                  label="Area km²"
                  value={country.area}
                  style={{ marginBottom: "15px" }}
                />
                <TextField
                  label="Population"
                  value={country.population}
                  style={{ marginBottom: "15px" }}
                />
              </div>

              <Button variant="contained" color="primary">
                Change the World!
              </Button>
            </div>
            <div>
              <div className="map-distance">
                <Map
                  latitude={country.location.latitude}
                  longitude={country.location.longitude}
                />
                {country.distanceToOtherCountries.map((neighbour) => (
                  <div key={Math.random()} className="country-distance">
                    <Link to={neighbour.countryName}>
                      <Typography variant="body1" gutterBottom>
                        {neighbour.countryName}
                      </Typography>
                    </Link>

                    <Typography variant="body2" gutterBottom>
                      {Math.round(neighbour.distanceInKm)} km
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
