import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../reduxLogic/store/store";
import SearchBar from "./SearchBar";
import CountryBasicInfoCard from "./CountryBasicInfoCard";
import { MainDashboardContainer } from "./styles/mainDashboardStyles";

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
    <MainDashboardContainer>
      {countriesStatusData.isFetching === false &&
      countriesStatusData.isValid === false ? (
        <p>
          Something went REALLY wrong, try again later or contact me at
          carlos.casciano@gmail.com
        </p>
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
          <div className="cards-container" >
            {countriesAppData
              .filter((country) => country.name.includes(userSearchInput))
              .map((country) => (
                <CountryBasicInfoCard key={country._id} countryData={country} />
              ))}
          </div>
        </>
      ) : null}
    </MainDashboardContainer>
  );
}
