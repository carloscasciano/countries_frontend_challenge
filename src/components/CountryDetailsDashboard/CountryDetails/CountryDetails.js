import React, { useState } from "react";
import store from "../../../reduxLogic/store/store";
import { changeCountryData } from "../../../reduxLogic/actions/actions";
import { CountryDetailsFormContainer } from "../countryDetailsDashboardStyles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function CountryDetails({ country }) {
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
    <CountryDetailsFormContainer>
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
        >
          Edit
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setEditInfoToggle(false);
            store.dispatch(
              changeCountryData(country.name, {
                capital: userCapitalInput,
                area: userAreaInput,
                population: userPopulationInput,
              })
            );
          }}
        >
          Save
        </Button>
      )}
      <TextField
        InputProps={{
          readOnly: !editInfoToggle,
        }}
        label="Capital"
        variant={editInfoToggle ? "outlined" : "standard"}
        value={editInfoToggle ? userCapitalInput : country.capital}
        style={{ marginBottom: "15px" }}
        onChange={handleUserCapital}
      />
      <TextField
        InputProps={{
          readOnly: !editInfoToggle,
        }}
        label="Area km²"
        type="number"
        variant={editInfoToggle ? "outlined" : "standard"}
        value={editInfoToggle ? userAreaInput : country.area}
        style={{ marginBottom: "15px" }}
        onChange={handleUserArea}
      />
      <TextField
        InputProps={{
          readOnly: !editInfoToggle,
        }}
        label="Population"
        type="number"
        variant={editInfoToggle ? "outlined" : "standard"}
        value={editInfoToggle ? userPopulationInput : country.population}
        style={{ marginBottom: "15px" }}
        onChange={handleUserPopulation}
      />
    </CountryDetailsFormContainer>
  );
}



/* 
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
               */
