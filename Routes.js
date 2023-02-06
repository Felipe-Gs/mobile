import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator();

import { Login } from './src/pages/Login/Login';
import { Home } from './src/pages/Home/Home';



export function AppRoutes(){
  return(
      <Navigator screenOptions={{ headerShown: false }}>
          <Screen
              name='Login'
              component={Login}
          />
          <Screen
              name='Home'
              component={Home}
          />
      </Navigator>
  )
}
