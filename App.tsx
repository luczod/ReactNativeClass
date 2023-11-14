import { GlobalModal } from './src/shared/components/modal/globalModal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/store';
import { Provider } from 'react-redux';
import Login from './src/modules/login';
import Home from './src/modules/home/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
