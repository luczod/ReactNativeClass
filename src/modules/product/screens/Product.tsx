import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import Text from '../../../shared/components/text/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

type TRouteProp = RouteProp<Record<string, ProductParams>>;
export interface ProductParams {
  product: ProductType;
}

export function Product() {
  const { params } = useRoute<TRouteProp>();
  const { product } = params;

  return <Text key={product.id}>{product.name}</Text>;
}
