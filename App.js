import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Categories from "./Screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "./Screens/Meals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={Categories} />
          <Stack.Screen name="Meals Overview" component={Meals} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
