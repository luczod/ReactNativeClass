import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Text from '../shared/components/text/Text';
import { textTypes } from '../shared/components/text/textTypes';
import { toMoney } from '../shared/functions/utils/money';
import { theme } from '../shared/themes/theme';
import { ProductType } from '../shared/types/productType';
import { ProductImg, ProductInsertCart, ProductThumbnailContaienr } from './productThumbnail.style';
import { ProductNavigationProp } from '../modules/product/screens/Product';
import { MenuUrl } from '../shared/enums/MuneUrl.enum';

interface IProps {
  product: ProductType;
  margin?: string;
}

export function ProductThumbnail({ product, margin }: IProps) {
  const { navigate } = useNavigation<ProductNavigationProp>();
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
      <ProductInsertCart>
        <AntDesign name="shoppingcart" size={18} color="#fff" />
      </ProductInsertCart>
    </ProductThumbnailContaienr>
  );
}
