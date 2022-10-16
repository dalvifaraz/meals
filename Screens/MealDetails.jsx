import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../Components/MealDetail";
import Subtitle from "../Components/MealDetails/Subtitle";
import List from "../Components/MealDetails/List";

const MealDetails = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <View style={styles.mealDetailContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <Subtitle>Ingredient</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Step</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  mealDetailContainer:{
    // paddingBottom: 20,
    marginBottom: 20,
  }
});
