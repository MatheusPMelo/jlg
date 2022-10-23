// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "./src/Pages/Initial";
import SignIn from "./src/Pages/SignIn";
import { StatusBar } from "react-native";
import Chart from "./src/Pages/Chart";
import PacientList from "./src/Pages/PacientList";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7ad3af" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Initial"
          component={Initial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PacientList"
          component={PacientList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chart"
          component={Chart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
