import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from './Routes';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
          <AppRoutes/>
      </AuthContextProvider>
    </NavigationContainer>
  );
}


