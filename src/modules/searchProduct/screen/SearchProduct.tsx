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
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
} from 'react-native';
import { ProductThumbnail } from '../../../productThumbnail/ProductThumbnail';
import { LoadingDiv, SearchProductDiv, SearchTabScrollDiv } from '../styles/searchProduct.style';
import { ActivityIndicatorButton } from '../../../shared/components/button/button.style';
import { theme } from '../../../shared/themes/theme';

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search?: string;
}

function SearchProduct() {
  const { searchProducts, setSearchProducts, insertSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { request, loading } = useRequest();
  const [value, setValue] = useState(params?.search || '');

  useEffect(() => {
    setSearchProducts(undefined);
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

  function handleOnChangeSearch(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setValue(event.nativeEvent.text);
    console.log(value);
  }

  function findNewPage() {
    if (searchProducts && searchProducts.meta.currentPage < searchProducts.meta.totalPages) {
      request<PaginationType<ProductType[]>>({
        url: `${URL_PRODUCT_PAGE}?search=${value}&page=${searchProducts.meta.currentPage + 1}`,
        method: MethodEnum.GET,
        saveGlobal: insertSearchProducts,
      });
      console.log(
        `${URL_PRODUCT_PAGE}?search=${value}&page=${searchProducts.meta.currentPage + 1}`,
      );
    }
  }

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;

    if (isEndScroll && !loading) {
      findNewPage();
    }
  }

  return (
    <SearchProductDiv>
      <Input value={value} onChange={handleOnChangeSearch} searchType />
      {searchProducts?.data.length > 0 && (
        <ScrollView onScroll={handleScroll}>
          <SearchTabScrollDiv>
            {searchProducts.data.map((product) => (
              <ProductThumbnail key={product.id} margin="4px" product={product} />
            ))}
          </SearchTabScrollDiv>
        </ScrollView>
      )}
      <LoadingDiv>
        {loading && <ActivityIndicatorButton size={50} color={theme.colors.mainTheme.primary} />}
      </LoadingDiv>
    </SearchProductDiv>
  );
}

export default SearchProduct;
