import styled from 'styled-components/native';

type ContainerTextProps = {
  color?: string;
  customMargin?: string;
  fontSize: string;
  fontFamily: 'Poppins_700Bold' | 'Poppins_300Light' | 'Poppins_600SemiBold' | 'Poppins_400Regular';
};

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.customMargin ? `margin: ${props.customMargin};` : '')}
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'Regular')};
  padding-top: 3px;
  font-size: ${(props) => props.fontSize};
`;
