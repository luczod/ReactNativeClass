import Text from '../shared/components/text/Text';
import { textTypes } from '../shared/components/text/textTypes';
import { toMoney } from '../shared/functions/utils/money';
import { theme } from '../shared/themes/theme';
import { ProductType } from '../shared/types/productType';
import { ProductImg, ProductThumbnailContaienr } from './productThumbnail.style';

interface IProps {
  product: ProductType;
  margin?: string;
}

export function ProductThumbnail({ product, margin }: IProps) {
  return (
    <ProductThumbnailContaienr margin={margin}>
      <ProductImg source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.BUTTON_SEMI_BOLD}>
        {toMoney.format(product.price)}
      </Text>
    </ProductThumbnailContaienr>
  );
}
