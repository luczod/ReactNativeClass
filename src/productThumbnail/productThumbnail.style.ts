import styled from 'styled-components/native';
import { theme } from '../shared/themes/theme';

interface ContainerProps {
  margin?: string;
}

export const ProductThumbnailContaienr = styled.TouchableOpacity<ContainerProps>`
  height: 172px;
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

export const ProductInsertCart = styled.TouchableOpacity`
  width: 118px;
  height: 32px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: ${theme.colors.mainTheme.primary};
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0px;
`;
