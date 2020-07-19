import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import store from "../../reduxLogic/store/store";
import Map from "../Map/Map";
import { CountryDetailsMainContainer } from "./countryDetailsDashboardStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { changeCountryData } from "../../reduxLogic/actions/actions";

export default function CountryDetailsDashbord() {
  const selectedCountryName = useParams().name;
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData.filter(
    (country) => country.name === selectedCountryName
  );
  const [editInfoToggle, setEditInfoToggle] = useState(false);
  const [userCapitalInput, setUserCapitalInput] = useState("");
  const [userAreaInput, setUserAreaInput] = useState("");
  const [userPopulationInput, setUserPopulationInput] = useState("");

  const handleUserCapital = (event) => {
    setUserCapitalInput(event.target.value);
  };

  const handleUserArea = (event) => {
    setUserAreaInput(event.target.value);
  };

  const handleUserPopulation = (event) => {
    setUserPopulationInput(event.target.value);
  };

  const handleEditCommand = (capital, area, population) => {
    setUserCapitalInput(capital);
    setUserAreaInput(area);
    setUserPopulationInput(population);
  };

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
                  InputProps={{
                    readOnly: !editInfoToggle,
                  }}
                  label="Capital"
                  value={editInfoToggle ? userCapitalInput : country.capital}
                  style={{ marginBottom: "15px" }}
                  onChange={handleUserCapital}
                />
                <TextField
                  label="Area km²"
                  value={editInfoToggle ? userAreaInput : country.area}
                  style={{ marginBottom: "15px" }}
                  onChange={handleUserArea}
                />
                <TextField
                  label="Population"
                  value={
                    editInfoToggle ? userPopulationInput : country.population
                  }
                  style={{ marginBottom: "15px" }}
                  onChange={handleUserPopulation}
                />
              </div>
              {!editInfoToggle ? (
                <Button
                  onClick={() => {
                    setEditInfoToggle(true);
                    handleEditCommand(
                      country.capital,
                      country.area,
                      country.population
                    );
                  }}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setEditInfoToggle(false);
                    store.dispatch(changeCountryData(country.name,{
                      capital: userCapitalInput,
                      area: userAreaInput,
                      population: userPopulationInput
                    }))
                  }}
                >
                  Save
                </Button>
              )}
            </div>
            <div>
              {/* 
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
               */}
            </div>
          </div>
          {/* 
          <div className="domain-container ">
            <Typography variant="body1">www.mydomain</Typography>
            <Typography variant="h5">
              {country.topLevelDomains[0].name}
            </Typography>
          </div>
           */}

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
