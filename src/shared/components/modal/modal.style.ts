import styled from 'styled-components/native';

import { theme } from '../../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.white};
  height: 200px;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;

  shadow-color: ${theme.colors.neutralTheme.black};
  shadow-offset: 0 0;
  shadow-radius: 8px;
  elevation: 20;
`;

export const IconCloseModal = styled(AntDesign)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
