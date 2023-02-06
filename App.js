import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from './Routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}


