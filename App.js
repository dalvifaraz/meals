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
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: "All Categories",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={Meals}
            options={{
              title: "Meals Overview",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
