/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsProvider } from "./src/services/restaurents/restaurents.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { firebaseConfig } from "./firebaseConfig";
import { AuthContaxtProvider } from "./src/services/authentication/authenticationContext";
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContaxtProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsProvider>
                <Navigation />
              </RestaurantsProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContaxtProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
