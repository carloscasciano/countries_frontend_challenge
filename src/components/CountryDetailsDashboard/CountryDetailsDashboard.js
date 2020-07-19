import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import store from "../../reduxLogic/store/store";
import CountryDetails from "./CountryDetails";
import MapDetails from "./MapDetails/MapDetails";
import NameFlagDomain from "./NameFlagDomain";
import { CountryDetailsMainContainer } from "./countryDetailsDashboardStyles";

import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

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
          <NameFlagDomain country={country} />

          <div className="info-container ">
            <CountryDetails country={country} />
            <MapDetails country={country} />
          </div>

          <Link to="/">
            <KeyboardReturnIcon fontSize="large" />
          </Link>
        </div>
      ))}
    </CountryDetailsMainContainer>
  );
}
