/** @format */

import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurentInfo from "../components/restaurent-info.component";

export const RestaurentInfoScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16 }}>
          <Searchbar />
        </View>

        <View style={{ flex: 1, backgroundColor: "green", padding: 16 }}>
          <RestaurentInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
