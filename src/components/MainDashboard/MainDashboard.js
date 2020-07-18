import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../reduxLogic/store/store";
import SearchBar from "./SearchBar";
import CountryBasicInfoCard from "../CountryBasicInfoCard/CountryBasicInfoCard";

export default function MainDashboard() {
  const countriesStatusData = useSelector((state) => state, [store]);
  const countriesAppData = countriesStatusData.countriesData;
  const [userSearchInput, setUserSearchInput] = useState("");

  const handleUserSearchText = (event) => {
    let userText = event.target.value.toLowerCase();
    let capitalized = userText.charAt(0).toUpperCase() + userText.slice(1);
    setUserSearchInput(capitalized);
  };

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
        <>
          <SearchBar
            handleUserSearchText={handleUserSearchText}
            userSearchInput={userSearchInput}
          />
          {countriesAppData
            .filter((country) => country.name.includes(userSearchInput))
            .map((country) => (
              <CountryBasicInfoCard key={country._id} countryData={country} />
            ))}
        </>
      ) : null}
    </div>
  );
}

/* 
countriesAppData.map((country) => (
    <div key={country._id}>
      <CountryBasicInfoCard countryData={country} />
    </div> */
