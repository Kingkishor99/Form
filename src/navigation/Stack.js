import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";

const Stack_ = createNativeStackNavigator();

const Stack = () => {
  return (
    <Stack_.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack_.Screen name="Screen1" component={Screen1} />
      <Stack_.Screen name="Screen2" component={Screen2} />
      <Stack_.Screen name="Screen3" component={Screen3} />
    </Stack_.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
