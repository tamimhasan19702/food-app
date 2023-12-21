/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { RestaurentInfoScreen } from "./src/components/restaurents/screens/restaurentInfo.screens";

export default function App() {
  return (
    <>
      <RestaurentInfoScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
