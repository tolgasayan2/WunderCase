import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "./components/User";
import UsersDetail from "./components/UsersDetail";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="PROFILES" component={User}></Stack.Screen>
        <Stack.Screen
          name="User Detail Page"
          component={UsersDetail}
        ></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
