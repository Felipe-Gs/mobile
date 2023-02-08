import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from './Routes';
import { AuthContextProvider } from './src/context/AuthContext';

import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
      <PaperProvider>
          <AppRoutes/>
      </PaperProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}


