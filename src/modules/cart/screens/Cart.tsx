import { View } from 'react-native';
import { useEffect } from 'react';
import Text from '../../../shared/components/text/Text';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useCartReducer } from '../../../store/reducers/cartReducer/useCartReducer';
import { URL_CART } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';

export function Cart() {
  const { request } = useRequest();
  const { cart, setCart } = useCartReducer();

  useEffect(() => {
    request({
      url: URL_CART,
      method: MethodEnum.GET,
      saveGlobal: setCart,
    });
  }, []);

  return (
    <View>
      <Text> produtos</Text>
    </View>
  );
}
