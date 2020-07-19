import React, { useEffect } from "react";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import CountryDetailsDashboard from "./components/CountryDetailsDashboard/CountryDetailsDashboard";
import { Provider } from "react-redux";
import store from "./reduxLogic/store/store";
import { getCountriesData } from "./dataRequests/getCountriesData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";

import { changeCountryData } from "./reduxLogic/actions/actions";

function App() {
  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <Provider store={store}>
      <button
        onClick={() => store.dispatch(changeCountryData("Japan", {'capital':'Blob', 'area': 15, 'population': 100}))}
        style={{ width: "50px", height: "50px" }}
      >
        TESTE
      </button>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/:name">
            <CountryDetailsDashboard />
          </Route>
          <Route path="/">
            <MainDashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
