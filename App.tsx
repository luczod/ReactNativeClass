import { GlobalModal } from './src/shared/components/modal/globalModal/GlobalModal';
import store from './src/store';
import { Provider } from 'react-redux';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <Routes />
    </Provider>
  );
};

export default App;
