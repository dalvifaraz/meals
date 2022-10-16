import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.detailsContainer, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
