/** @format */
import MapView from "react-native-maps";
import { MapSearch } from "../components/MapSearch.component";
import { LocationContext } from "../../../services/location/location.context";
import { restaurantsContext } from "../../../services/restaurents/restaurents.context";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurents = [] } = useContext(restaurantsContext);
  const { lat, lng, viewPort } = location;
  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northEastLat = viewPort.northeast.lat;
    const southWestLat = viewPort.southwest.lat;
    setLatDelta(northEastLat - southWestLat);
  }, [location, viewPort]);
  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurents.map((restaurent) => {
          return null;
        })}
      </Map>
    </>
  );
};
