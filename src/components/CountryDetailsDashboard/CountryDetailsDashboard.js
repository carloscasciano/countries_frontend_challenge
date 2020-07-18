import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import store from "../../reduxLogic/store/store";

export default function CountryDetailsDashbord() {
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData;
  let selectedCountryName = useParams().name;

  return (
    <div>
      {countriesAppData
        .filter((country) => country.name === selectedCountryName)
        .map((country) => (
          <div key={country._id}>
            <img
              src={country.flag.svgFile}
              style={{ height: "28px", width: "35px" }}
              alt={country.name}
            />
            <p>{country.name}</p>
            <p>{country.capital}</p>
            <p>{country.area}</p>
            <p>{country.population}</p>
            {country.topLevelDomains.map(d=><p key={Math.random()}>{d.name}</p>)}
          </div>
        ))}
    </div>
  );
}
