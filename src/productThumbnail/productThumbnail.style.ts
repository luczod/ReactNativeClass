import styled from 'styled-components/native';
import { theme } from '../shared/themes/theme';

interface ContainerProps {
  margin?: string;
}

export const ProductThumbnailContaienr = styled.TouchableOpacity<ContainerProps>`
  height: 160px;
  border-radius: 8px;
  width: 120px;
  border: 1px solid ${theme.colors.grayTheme.gray80};
  padding: 4px;

  margin: ${(props) => props.margin || '0px'};
`;

export const ProductImg = styled.Image`
  width: 100%;
  height: 70px;
  border-radius: 8px;
  margin-bottom: 2px;
`;
