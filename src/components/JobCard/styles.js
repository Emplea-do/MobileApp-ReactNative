import styled from 'styled-components';
import theme from '../../theme';

export const Card = styled.View`
  padding: 6px;
  background-color: white;
  margin-bottom: 5px;
  border-radius: 4px;
`;

/* Title */
export const TitleContainer = styled.View`
  flex: 5;
  /* If the post has no logo, a little margin is added between the title and the information container. */
  ${props => !props.logo && 'margin-bottom: 4px;'}
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'SFProDisplay-Medium';
`;

/* Logo */
export const LogoContainer = styled.View`
  flex: 0 1 auto;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

/* Info = Remote + Company + Location */
export const InfoContainer = styled.View`
  flex: 1 0 auto;
`;

/* Remote Badge */
export const RemoteContainer = styled.View`
  flex: 0 1 auto;
  flex-flow: column wrap;
  margin-right: 4px;
`;

/* Company */
export const CompanyContainer = styled.View`
  flex: 1 0 auto;
  flex-flow: column wrap;
`;

export const Company = styled.Text`
  font-size: 14px;
  font-family: 'SFProDisplay-Medium';
`;

/* Location */
export const LocationText = styled.Text`
  margin-top: 2px;
  font-family: 'SFProDisplay-Regular';
  font-size: 14px;
  color: ${theme.colors.secondary};
  flex: 1;
`;

/* Category */
export const CategoryContainer = styled.View`
  flex-flow: column wrap;
  flex: 0 1 auto;
  align-self: flex-end;
  flex-direction: row-reverse;
`;

export const Row = styled.View`
  flex: 1 0 auto;
  flex-flow: row wrap;
`;
