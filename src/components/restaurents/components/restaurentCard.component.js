/** @format */

import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import Open from "../../../../assets/open";
import { Spacer } from "../../spacer/spacer";
import { Text } from "../../typography/text.component";
import {
  ResCard,
  ResCover,
  Info,
  Rating,
  Address,
  Section,
  SectionEnd,
  Icon,
} from "./restaurentCard.styles";

const RestaurentCard = ({ restaurent = {} }) => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const {
    name = "Mayer doya restaurent",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
      "https://myfitnessnotion.files.wordpress.com/2021/06/balanced-diet.jpg",
    ],
    address = "Professor-para chandpur",
    isOpenNow = "True",
    rating = 3,
    isClosedTemporarily = "True",
  } = restaurent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResCard elevation={5}>
      <ResCover
        key={name}
        source={{
          uri: photos[1],
        }}
      />
      <Info>
        <Text varient="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={"left"} size={"large"}>
              {isOpenNow && (
                <SvgXml xml={Open} width={20} height={20} fill={"#f00"} />
              )}
            </Spacer>
            <Spacer position={"left"} size={"large"}>
              <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ResCard>
  );
};

export default RestaurentCard;
