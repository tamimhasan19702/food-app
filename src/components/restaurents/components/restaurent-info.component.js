/** @format */

import { View, Text } from "react-native";
import React from "react";
import { Button, Card, Text as paperText } from "react-native-paper";

const RestaurentInfo = ({ restaurent = {} }) => {
  const {
    name = "Mayer doya restaurent",
    icon,
    photos = [],
    address = "Professor-para chandpur",
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurent;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{
          uri: photos[0],
        }}
        style={styles.cover}
      />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
      </Card.Content>
    </Card>
  );
};

export default RestaurentInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
