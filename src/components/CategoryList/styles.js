import styled from 'styled-components';
import theme from '../../theme';

export const List = styled.ScrollView`
  flex-direction: row;
  margin: 10px -3px;
`;

export const Category = styled.TouchableOpacity`
  background-color: white;
  height: 110px;
  width: 110px;
  border-radius: 4px;
  margin: 0 3px;
  align-items: center;
`;

export const Icon = styled.Image`
  margin-top: 7px;
  width: 56px;
  height: 56px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${theme.colors.secondary};
  font-family: 'SFProDisplay-Medium';
  width: 90px;
  text-align: center;
`;
