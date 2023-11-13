import { SafeAreaView } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';
import Login from './src/modules/login';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
