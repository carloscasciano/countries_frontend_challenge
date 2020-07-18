import React, { useEffect } from "react";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import { Provider } from "react-redux";
import store from "./reduxLogic/store/store";
import { getCountriesData } from "./dataRequests/getCountriesData";


function App() {


  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <Provider store={store}>
      <MainDashboard />
    </Provider>
  );
}

export default App;
