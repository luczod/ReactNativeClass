import { SafeAreaView } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';
import Login from './src/modules/login';
import { GlobalModal } from './src/shared/components/modal/globalModal/GlobalModal';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
        <GlobalModal />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
