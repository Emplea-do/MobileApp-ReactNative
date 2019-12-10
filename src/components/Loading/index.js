import React from 'react';
import theme from '../../theme';
import { Container, Loader } from './styles';

export const Loading = () => {
  return (
    <Container>
      <Loader animating size="large" color={theme.colors.primary} />
    </Container>
  );
};
