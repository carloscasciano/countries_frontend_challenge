import React from "react";

export default function CountryBasicInfoCard({ countryData }) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={countryData.flag.svgFile}
        style={{ height: "28px", width: "35px" }}
        alt={countryData.name}
      />
      <p>{countryData.name}</p>
      <p>{countryData.capital}</p>
    </div>
  );
}
