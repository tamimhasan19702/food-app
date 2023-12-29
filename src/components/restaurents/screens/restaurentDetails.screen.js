/** @format */

import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import { RestaurentCard } from "../components/restaurentCard.component";

export const RestaurentDetails = ({ route }) => {
  const [breakfastExtended, setBreakfastExtended] = useState(false);
  const [lunchExtended, setLunchExtended] = useState(false);
  const [dinnerExtended, setDinnerExtended] = useState(false);
  const [drinksExtended, setDrinksExtended] = useState(false);
  const { restaurent } = route.params;

  const renderAccordion = (title, icon, extended, setExtended, items) => {
    return (
      <View>
        <List.Accordion
          title={title}
          left={(props) => <List.Icon {...props} icon={icon} />}
          expanded={extended}
          onPress={() => setExtended(!extended)}>
          {items.map((item, index) => (
            <List.Item key={index} title={item} />
          ))}
        </List.Accordion>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <RestaurentCard restaurent={restaurent} />

      <ScrollView style={{ height: "100%" }}>
        {renderAccordion(
          "Breakfast",
          "bread-slice",
          breakfastExtended,
          setBreakfastExtended,
          ["Burger", "Salad", "Soup", "Steak"]
        )}

        {renderAccordion(
          "Lunch",
          "hamburger",
          lunchExtended,
          setLunchExtended,
          ["Burger", "Salad", "Soup", "Steak"]
        )}

        {renderAccordion(
          "Dinner",
          "food-variant",
          dinnerExtended,
          setDinnerExtended,
          ["Pasta", "Salad", "Soup", "Steak"]
        )}

        {renderAccordion("Drinks", "cup", drinksExtended, setDrinksExtended, [
          "Coffee",
          "Juice",
          "Tea",
          "Beer",
        ])}
      </ScrollView>
    </SafeAreaView>
  );
};
