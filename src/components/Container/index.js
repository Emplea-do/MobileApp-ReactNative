import React from 'react';
import { ContainerView } from './styles';

export const Container = ({ children, ...props }) => {
  return <ContainerView {...props}>{children}</ContainerView>;
};
