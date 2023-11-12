import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native';

SplashScreen.preventAutoHideAsync();

import Login from './src/modules/login';

const App = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
