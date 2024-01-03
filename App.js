/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsProvider } from "./src/services/restaurents/restaurents.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthContaxtProvider } from "./src/services/authentication/authenticationContext";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
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
