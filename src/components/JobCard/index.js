import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge } from '../Badge';
import {
  Card,
  CategoryContainer,
  Company,
  CompanyContainer,
  InfoContainer,
  LocationText,
  Logo,
  LogoContainer,
  RemoteContainer,
  Row,
  Title,
  TitleContainer,
} from './styles';

export const JobCard = props => {
  const {
    Title: title,
    CompanyName,
    CompanyLogoUrl,
    IsRemote,
    JobType,
    Location,
  } = props;

  return (
    <Card>
      <Row>
        <TitleContainer logo={CompanyLogoUrl !== null}>
          <Title>{title}</Title>
        </TitleContainer>
        <LogoContainer>
          {CompanyLogoUrl && (
            <Logo source={{ uri: CompanyLogoUrl }} resizeMode="contain" />
          )}
        </LogoContainer>
      </Row>
      <Row>
        <InfoContainer>
          <Row>
            {IsRemote && (
              <RemoteContainer>
                <Badge primary>Remoto</Badge>
              </RemoteContainer>
            )}

            <CompanyContainer>
              <Company>{CompanyName}</Company>
            </CompanyContainer>
          </Row>
          <Row>
            <LocationText>
              <Ionicons name="md-pin" size={14} /> {Location}
            </LocationText>
          </Row>
        </InfoContainer>
        <CategoryContainer>
          <Badge>{JobType}</Badge>
        </CategoryContainer>
      </Row>
    </Card>
  );
};
