import React, { useEffect } from "react";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import CountryDetailsDashboard from "./components/CountryDetailsDashboard/CountryDetailsDashboard";
import { Provider } from "react-redux";
import store from "./reduxLogic/store/store";
import { getCountriesData } from "./dataRequests/getCountriesData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles/global";


function App() {
  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <Provider store={store}>
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
