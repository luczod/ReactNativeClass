import { ParamListBase, useNavigation, NavigationProp } from '@react-navigation/native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { useRequest } from '../../../shared/hooks/useRequest';

import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';

import { MenuUrl } from '../../../shared/enums/MuneUrl.enum';
import { ProductNavigationProp } from '../../product/screens/Product';

export default function Home() {
  const { navigate } = useNavigation<ProductNavigationProp>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  function handleGoToProduct(product: ProductType) {
    navigate(MenuUrl.PRODUCT, {
      product,
    });
  }

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
        <TouchableOpacity key={product.id} onPress={() => handleGoToProduct(product)}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Static options are also supported!
