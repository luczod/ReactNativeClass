import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Text from '../shared/components/text/Text';
import { textTypes } from '../shared/components/text/textTypes';
import { toMoney } from '../shared/functions/utils/money';
import { theme } from '../shared/themes/theme';
import { ProductType } from '../shared/types/productType';
import { ProductImg, ProductInsertCart, ProductThumbnailContaienr } from './productThumbnail.style';
import { ProductNavigationProp } from '../modules/product/screens/Product';
import { MenuUrl } from '../shared/enums/MenuUrl.enum';
import { useRequest } from '../shared/hooks/useRequest';
import { URL_CART } from '../shared/constants/urls';
import { MethodEnum } from '../enums/methods.enum';
import { ActivityIndicator } from 'react-native';
import { CartRequest } from '../shared/types/cartRequest';

interface IProps {
  product: ProductType;
  margin?: string;
}

const AMOUNT_DEFAULT = 1;

export function ProductThumbnail({ product, margin }: IProps) {
  const { navigate } = useNavigation<ProductNavigationProp>();
  const { request, loading } = useRequest();

  function handleInsertProductInCart() {
    request<unknown, CartRequest>({
      url: URL_CART,
      method: MethodEnum.POST,
      body: {
        productId: product.id,
        amount: AMOUNT_DEFAULT,
      },
      message: 'Inserido com sucesso!',
    });
  }

  function handleGoToProduct() {
    navigate(MenuUrl.PRODUCT, { product });
  }
  return (
    <ProductThumbnailContaienr onPress={handleGoToProduct} margin={margin}>
      <ProductImg source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {toMoney.format(product.price)}
      </Text>
      <ProductInsertCart onPress={handleInsertProductInCart}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neutralTheme.white} />
        ) : (
          <AntDesign name="shoppingcart" size={18} color={theme.colors.neutralTheme.white} />
        )}
      </ProductInsertCart>
    </ProductThumbnailContaienr>
  );
}
