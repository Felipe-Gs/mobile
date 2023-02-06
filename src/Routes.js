import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaLogin">
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    );
  }