import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MenuUrl } from '../shared/enums/MenuUrl.enum';
import CreateUser from '../modules/createUser';
import Login from '../modules/login';
import Home from '../modules/home';
import Splash from '../modules/splash';
import { theme } from '../shared/themes/theme';
import Orders from '../modules/orders';
import Profile from '../modules/profile';
import { Product } from '../modules/product/screens/Product';
import { Cart } from '../modules/cart/screens/Cart';
import SearchProduct from '../modules/searchProduct';

type AntDesignName = React.ComponentProps<typeof AntDesign>['name'];

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
    let iconName: AntDesignName;

    switch (route.name) {
      case MenuUrl.HOME:
        iconName = 'home';
        break;
      case MenuUrl.ORDER:
        iconName = 'doubleright';
        break;
      case MenuUrl.SEARCH_PRODUCT:
        iconName = 'search1';
        break;
      case MenuUrl.CART:
        iconName = 'shoppingcart';
        break;
      case MenuUrl.PROFILE:
        iconName = 'profile';
        break;
      default:
        iconName = 'caretup';
        break;
    }

    return <AntDesign name={iconName} size={18} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => renderTabBarIcon(color, route),
        tabBarActiveTintColor: theme.colors.mainTheme.primary,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
          padding: 8,
        },
      })}
    >
      <Tab.Screen name={MenuUrl.HOME} component={Home} />
      <Tab.Screen name={MenuUrl.ORDER} component={Orders} options={{ title: 'Pedidos' }} />
      <Tab.Screen
        name={MenuUrl.SEARCH_PRODUCT}
        component={SearchProduct}
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen name={MenuUrl.PROFILE} component={Profile} options={{ title: 'Perfil' }} />
      <Tab.Screen name={MenuUrl.CART} component={Cart} options={{ title: 'Carrinho' }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.PRODUCT} component={Product} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
        <Stack.Screen
          name={MenuUrl.TABBOTTOM}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
