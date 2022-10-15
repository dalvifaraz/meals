import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Categories from "./Screens/Categories";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Categories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
