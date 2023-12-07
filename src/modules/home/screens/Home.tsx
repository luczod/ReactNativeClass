import { useEffect } from 'react';
import { View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';

export default function Home({ navigation }) {
  // const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  return (
    <View>
      {products.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
}

// Static options are also supported!
