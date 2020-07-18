import React, {useEffect} from 'react';
import MainDashboard from './components/MainDashboard/MainDashboard'
import {getCountriesData} from './dataRequests/getCountriesData'

function App() {

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div>
      <MainDashboard />
    </div>
  );
}

export default App;
