import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../Components/CategoriesGrid";


const renderCategories = (itemData) => {
    return <CategoriesGrid title={itemData.item.title} color={itemData.item.color} id={itemData.item.id}/>;
}
const Categories = () => {
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
