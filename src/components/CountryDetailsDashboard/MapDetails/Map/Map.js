import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import store from "../../../../reduxLogic/store/store";
import { useSelector } from "react-redux";
import { mapsColors } from "../../../../styles/mapsColors";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map({ latitude, longitude, neighbours }) {
  console.log(neighbours);
  const countriesStatusData = useSelector((state) => state, [store]);
  console.log(countriesStatusData.countriesData);
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [longitude * -1, latitude * -1, 0],
        scale: 500,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#242424"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[longitude, latitude]}>
        <circle r={24} fill="#ABD904" />
      </Marker>
      {neighbours.map((n, index) => (
        <Marker
          coordinates={[
            countriesStatusData.countriesData.filter(
              (c) => c.name === n.countryName
            )[0]["location"]["longitude"],
            countriesStatusData.countriesData.filter(
              (c) => c.name === n.countryName
            )[0]["location"]["latitude"],
          ]}
          key={Math.random()}
        >
          <circle r={16} fill={mapsColors.neighbourColors[index]} />
        </Marker>
      ))}
    </ComposableMap>
  );
}
