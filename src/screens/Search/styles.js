import styled from 'styled-components';
import theme from '../../theme';

export const Header = styled.View``;

export const Title = styled.Text`
  margin-top: 60px;
  font-family: 'SFProDisplay-Bold';
  font-size: 26px;
`;

export const SearchBox = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${theme.colors.primary};
  border-bottom-width: 1.5px;
`;

export const SearchInput = styled.TextInput`
  font-size: 20px;
  flex: 1;
`;

export const Subtitle = styled.Text`
  margin-top: 20px;
  font-family: 'SFProDisplay-Bold';
  font-size: 19px;
`;

export const RemoteJobsBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RemoteJobsTitle = styled.Text`
  font-size: 18px;
  justify-content: flex-start;
  font-family: 'SFProDisplay-Medium';
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  margin-top: 20px;
`;
export const SeachButtonText = styled.Text`
  color: white;
  padding: 16px;
  font-size: 30px;
  font-family: 'SFProDisplay-Bold';
  text-align: center;
  padding-top: 12px;
`;
