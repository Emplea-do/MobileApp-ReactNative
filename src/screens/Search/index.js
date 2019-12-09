import React, { useState } from 'react';
import { Switch } from 'react-native-switch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from 'react-navigation-hooks';
import { CategoryList } from '../../components/CategoryList';
import { Container } from '../../components/Container';
import theme from '../../theme';
import {
  Header,
  RemoteJobsBox,
  RemoteJobsTitle,
  SeachButtonText,
  SearchBox,
  SearchButton,
  SearchInput,
  Subtitle,
  Title,
} from './styles';

const SearchScreen = () => {
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [query, setQuery] = useState('');

  const { navigate } = useNavigation();

  const search = () => {
    navigate('Listing', { query });
  };

  return (
    <Container behavior="position">
      <Header>
        <Title>Hola, ¿Qué tipo de trabajo estas buscando?</Title>
      </Header>
      <SearchBox>
        <SearchInput
          placeholder="Keywords"
          onChangeText={text => setQuery(text)}
        />
        <Ionicons name="md-search" size={28} />
      </SearchBox>
      <Subtitle>Buscar por categoría</Subtitle>
      <CategoryList />
      <RemoteJobsBox>
        <RemoteJobsTitle>Buscar solo empleos remotos</RemoteJobsTitle>
        <Switch
          value={remoteOnly}
          onValueChange={setRemoteOnly}
          backgroundActive={theme.colors.primary}
          backgroundInactive={theme.colors.secondary}
          circleBorderWidth={0}
          barHeight={31}
          circleSize={27}
          switchWidthMultiplier={2.1}
        />
      </RemoteJobsBox>
      <SearchButton onPress={search}>
        <SeachButtonText>Buscar</SeachButtonText>
      </SearchButton>
    </Container>
  );
};

export default SearchScreen;
