import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";

const Meals = ({ route }) => {
  const catId = route.params.categoryId;

  const displayMeals =
    MEALS.filter((mealData) => {
      return mealData.categoryIds.indexOf(catId) >= 0;
    });
  

  const renderMeals = (itemData) => {
    const mealsItemProps={
        title: itemData.item.title,
        imgUrl: itemData.item.imageUrl,
        duration: itemData.item.duration,
        complexity: itemData.item.complexity,
        affordability: itemData.item.affordability
    }
    return <MealItem {...mealsItemProps}/>
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayMeals} 
      keyExtractor={(item) => item.id} 
      renderItem={renderMeals}/>
    {/* <Text>HELLO</Text> */}
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
