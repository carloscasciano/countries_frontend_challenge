import React from "react";
import Typography from "@material-ui/core/Typography";

export default function NameFlagDomain({ country }) {
    console.log(country.topLevelDomains)
  return (
    <>
      <div className="country-title">
        <Typography variant="h2" align="center">
          {country.name}
        </Typography>
      </div>
      <img
        className="img-container"
        src={country.flag.svgFile}
        alt={country.name}
      />
      {country.topLevelDomains.length > 0 ? (
        <div className="domain-container ">
          <Typography variant="body1">www.mydomain</Typography>
          <Typography variant="h5">
            {country.topLevelDomains[0].name}
          </Typography>
        </div>
      ) : null}
    </>
  );
}
