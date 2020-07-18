import React from "react";
import { useSelector } from "react-redux";
import store from "../../reduxLogic/store/store";

export default function MainDashboard() {
  const countriesData = useSelector((state) => state, [store]);
  console.log("oi", countriesData);

  return (
    <div>
      <p>Main Dashboard here</p>
      {countriesData.isFetching === false && countriesData.isValid === false ? (
        <p>deu ruim</p>
      ) : countriesData.isFetching === true &&
        countriesData.isValid === false ? (
        <p>Loading App...</p>
      ) : countriesData.isFetching === true &&
        countriesData.isValid === true ? (
        <p>passou</p>
      ) : null}
    </div>
  );
}
