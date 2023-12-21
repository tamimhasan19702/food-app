/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurentInfoScreen } from "./src/components/restaurents/screens/restaurentInfo.screens";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentInfoScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
