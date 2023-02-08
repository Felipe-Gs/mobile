import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator();

import { Login } from './src/pages/Login/Login';
import { Home } from './src/pages/Home/Home';

import { Listar } from './src/pages/LIstar/Listar';



export function AppRoutes(){
  return(
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          <Screen
              name='Login'
              component={Login}
          />
          <Screen
              name='Home'
              component={Home}
          />
          <Screen
              name='Listar'
              component={Listar}
          />
      </Navigator>
  )
}
