import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((data, index) => (
    <View key={index} style={styles.listContainer}>
      <Text style={styles.listItem}>{data}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
    listContainer:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 18,
        backgroundColor: '#e2b497'
    },
    listItem:{
        color: '#351401',
        
    }
});
