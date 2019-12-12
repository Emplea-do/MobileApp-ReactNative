import styled from 'styled-components';
import theme from '../../theme';

export const BadgeContainer = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 2px 6px;
  background-color: ${theme.colors.mediumSlateBlue};
  align-self: flex-start;

  ${props => props.primary && `background-color: ${theme.colors.primary};`};
`;

export const Content = styled.Text`
  font-size: 12px;
  font-family: 'SFProDisplay-Bold';
  color: white;
`;
