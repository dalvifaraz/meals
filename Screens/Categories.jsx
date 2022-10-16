import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../Components/CategoriesGrid";

const Categories = ({ navigation }) => {
  const renderCategories = (itemData) => {
    function onPressCategory() {
      navigation.navigate('MealsOverview',{
        categoryId : itemData.item.id
      });
    }

    return (
      <CategoriesGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressCategory}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.data}
        renderItem={renderCategories}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
