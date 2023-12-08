import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { MethodEnum } from '../../../enums/methods.enum';
import Text from '../../../shared/components/text/Text';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { useRequest } from '../../../shared/hooks/useRequest';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import Input from '../../../shared/components/input/Input';
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from 'react-native';
import { DivInput } from '../../home/styles/home.styles';
import { ProductThumbnail } from '../../../productThumbnail/ProductThumbnail';

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search?: string;
}

function SearchProduct() {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { request } = useRequest();
  const [value, setValue] = useState(params?.search || '');

  useEffect(() => {
    if (value) {
      request<PaginationType<ProductType[]>>({
        url: `${URL_PRODUCT_PAGE}?search=${value}`,
        method: MethodEnum.GET,
        saveGlobal: setSearchProducts,
      });
      console.log(`${URL_PRODUCT_PAGE}?search=${value}`);
    }
  }, [value]);

  searchProducts?.data.length > 0 && console.log(searchProducts.meta);

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
    console.log(value);
  };

  return (
    <>
      <DivInput>
        <Input value={value} onChange={handleOnChangeSearch} searchType />
      </DivInput>
      {searchProducts?.data.length > 0 && (
        <ScrollView>
          {searchProducts.data.map((product) => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </ScrollView>
      )}
      <Text>vazio</Text>
    </>
  );
}

export default SearchProduct;
