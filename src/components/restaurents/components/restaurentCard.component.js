/** @format */

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Text as paperText } from "react-native-paper";
import Styled, { styled } from "styled-components/native";

const RestaurentCard = ({ restaurent = {} }) => {
  const {
    name = "Mayer doya restaurent",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    ],
    address = "Professor-para chandpur",
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurent;
  return (
    <ResCard elevation={5}>
      <ResCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <Title variant="titleLarge">{name}</Title>
      </Card.Content>
    </ResCard>
  );
};

export default RestaurentCard;

const Title = Styled.Text`
margin-top: ${(props) => props.theme.space[3]};
color: ${(props) => props.theme.colors.ui.secondary};
`;

const ResCover = Styled(Card.Cover)`
padding:${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ResCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
