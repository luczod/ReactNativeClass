import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { useRequest } from '../../../shared/hooks/useRequest';

import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';

import { MenuUrl } from '../../../shared/enums/MuneUrl.enum';

import { ProductThumbnail } from '../../../productThumbnail/ProductThumbnail';

export default function Home() {
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
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => (
          <ProductThumbnail key={item.id} margin="0px 8px" product={item} />
        )}
      />
    </View>
  );
}

// Static options are also supported!
