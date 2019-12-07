import React from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';

const ListingScreen = () => {
  const query = useNavigationParam('query');
  return (
    <KeyboardAvoidingView behavior="position">
      <Text>Resultados de: {query}</Text>
    </KeyboardAvoidingView>
  );
};

export default ListingScreen;
