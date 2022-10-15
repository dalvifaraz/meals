import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
const CategoriesGrid = ({ title, color, id }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
