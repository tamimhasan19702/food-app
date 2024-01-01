/** @format */

import React, { useState } from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { List } from "react-native-paper";
import RestaurentCard from "../components/restaurentCard.component";
import { SafeView } from "../../safeArea.component";
export default function RestaurentDetails({ route }) {
  const [breakfastExtended, setBreakfastExtended] = useState(false);
  const [lunchExtended, setLunchExtended] = useState(false);
  const [dinnerExtended, setDinnerExtended] = useState(false);
  const [drinksExtended, setDrinksExtended] = useState(false);
  const { restaurent } = route.params;

  const data = [
    {
      title: "Breakfast",
      icon: "bread-slice",
      extended: breakfastExtended,
      setExtended: setBreakfastExtended,
      items: ["Burger", "Salad", "Soup", "Steak"],
    },
    {
      title: "Lunch",
      icon: "hamburger",
      extended: lunchExtended,
      setExtended: setLunchExtended,
      items: ["Burger", "Salad", "Soup", "Steak"],
    },
    {
      title: "Dinner",
      icon: "food-variant",
      extended: dinnerExtended,
      setExtended: setDinnerExtended,
      items: ["Pasta", "Salad", "Soup", "Steak"],
    },
    {
      title: "Drinks",
      icon: "cup",
      extended: drinksExtended,
      setExtended: setDrinksExtended,
      items: ["Coffee", "Juice", "Tea", "Beer"],
    },
  ];

  const renderAccordion = ({ item }) => {
    const { title, icon, extended, setExtended, items } = item;
    return (
      <List.Accordion
        title={title}
        left={(props) => <List.Icon {...props} icon={icon} />}
        expanded={extended}
        onPress={() => setExtended(!extended)}>
        {items.map((item, index) => (
          <List.Item key={index} title={item} />
        ))}
      </List.Accordion>
    );
  };

  return (
    <SafeView>
      <RestaurentCard restaurent={restaurent} />
      <FlatList
        data={data}
        renderItem={renderAccordion}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeView>
  );
}
