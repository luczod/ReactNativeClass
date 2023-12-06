import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuUrl } from './shared/enums/MuneUrl.enum';
import CreateUser from './modules/createUser';
import Login from './modules/login';
import Home from './modules/home';
import Splash from './modules/splash';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
