import React from "react";
import Map from "./Map";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { mapsColors } from "../../../globalStyles/mapsColors";
import { MapComponentContainer } from "./mapStyles";

export default function MapDetails({ country }) {
  return (
    <MapComponentContainer>
      <Map
        latitude={country.location.latitude}
        longitude={country.location.longitude}
        neighbours={country.distanceToOtherCountries}
        area={country.area}
      />
      {country.distanceToOtherCountries.map((neighbour, index) => (
        <div key={Math.random()} className="country-distance">
          <div className="neighbours-container">
            <Link to={neighbour.countryName}>
              <Typography variant="subtitle1" gutterBottom>
                {neighbour.countryName}
              </Typography>
            </Link>

            <Typography
              variant="h6"
              gutterBottom
              style={{ color: mapsColors.neighbourColors[index] }}
            >
              {Math.round(neighbour.distanceInKm)} km
            </Typography>
          </div>
        </div>
      ))}
    </MapComponentContainer>
  );
}
