import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const MealItem = ({
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.img} />
            <Text style={styles.title}>MealItem - {title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsItem}>{duration}</Text>
            <Text style={styles.detailsItem}>{complexity}</Text>
            <Text style={styles.detailsItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
