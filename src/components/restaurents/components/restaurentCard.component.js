/** @format */

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Text as paperText } from "react-native-paper";
import Styled, { styled } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = Styled(Text)`
font-size: ${(props) => props.theme.fontSizes.body};
font-family: ${(props) => props.theme.fonts.heading};
color: ${(props) => props.theme.colors.ui.primary};
`;

const ResCover = Styled(Card.Cover)`
padding:  ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ResCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  display: flex;
  flex-direction: row;
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

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
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    ],
    address = "Professor-para chandpur",
    isOpenNow,
    rating = 3,
    isClosedTemporarily,
  } = restaurent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResCard elevation={5}>
      <ResCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((index) => (
            <SvgXml xml={star} width={20} height={20} key={index} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </ResCard>
  );
};

export default RestaurentCard;
