/** @format */
import MapView from "react-native-maps";
import { MapSearch } from "../components/MapSearch.component";
export const MapScreen = () => {
  return (
    <>
      <MapSearch />
      <MapView style={{ flex: 1 }} />
    </>
  );
};
