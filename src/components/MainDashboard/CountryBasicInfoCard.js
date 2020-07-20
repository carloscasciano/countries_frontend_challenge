import React from "react";
import { Link } from "react-router-dom";
import { BasicCardContainer } from "./styles/countryBasicCardStyles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function CountryBasicInfoCard({ countryData }) {
  return (
    <Link to={countryData.name}>
      <BasicCardContainer>
        <div className="flag-container">
          <img src={countryData.flag.svgFile} alt={countryData.name} />
        </div>
        <div className="basic-info">
          <p className="country">{countryData.name}</p>
          <p>{countryData.capital}</p>
        </div>
        <div className="details-icon">
          <NavigateNextIcon fontSize="large" />
        </div>
      </BasicCardContainer>
    </Link>
  );
}
