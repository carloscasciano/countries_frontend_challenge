import React from "react";
import Map from "./Map/Map";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { mapsColors } from "../../../styles/mapsColors";
console.log(mapsColors);

export default function MapDetails({ country }) {
  return (
    <div>
      <div>
        <Map
          latitude={country.location.latitude}
          longitude={country.location.longitude}
          neighbours={country.distanceToOtherCountries}
          area={country.area}
        />
        {country.distanceToOtherCountries.map((neighbour, index) => (
          <div key={Math.random()} className="country-distance">
            <Link to={neighbour.countryName}>
              <Typography variant="body1" gutterBottom>
                {neighbour.countryName}
              </Typography>
            </Link>

            <Typography
              variant="body2"
              gutterBottom
              style={{ color: mapsColors.neighbourColors[index] }}
            >
              {Math.round(neighbour.distanceInKm)} km
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
