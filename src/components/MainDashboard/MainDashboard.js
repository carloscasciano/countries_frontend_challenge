import React from "react";
import { useSelector } from "react-redux";
import store from "../../reduxLogic/store/store";
import CountryBasicInfoCard from "../CountryBasicInfoCard/CountryBasicInfoCard";

export default function MainDashboard() {
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData;

  return (
    <div>
      <p>Main Dashboard here</p>
      {countriesStatusData.isFetching === false &&
      countriesStatusData.isValid === false ? (
        <p>deu ruim</p>
      ) : countriesStatusData.isFetching === true &&
        countriesStatusData.isValid === false ? (
        <p>Loading App...</p>
      ) : countriesStatusData.isFetching === true &&
        countriesStatusData.isValid === true ? (
        countriesAppData.map((country) => (
          <div key={country._id}>
            <CountryBasicInfoCard countryData={country} />
          </div>
        ))
      ) : null}
    </div>
  );
}
