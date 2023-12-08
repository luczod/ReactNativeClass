import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { useRequest } from '../../../shared/hooks/useRequest';

import { ProductType } from '../../../shared/types/productType';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';

import { ProductThumbnail } from '../../../productThumbnail/ProductThumbnail';
import Input from '../../../shared/components/input/Input';
import { DivInput } from '../styles/home.styles';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';

export default function Home() {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = () => {
    if (search) {
      navigate(MenuUrl.SEARCH_PRODUCT);
    }
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  };

  return (
    <View>
      <DivInput>
        <Input
          onPressIconRight={handleGoToProduct}
          value={search}
          onChange={handleOnChangeSearch}
          searchType
          onSubmitEditing={handleGoToProduct}
        />
      </DivInput>
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
