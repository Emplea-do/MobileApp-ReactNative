import React from 'react';
import { BadgeContainer, Content } from './styles';

export const Badge = ({ children, ...props }) => {
  return (
    <BadgeContainer {...props}>
      <Content>{children}</Content>
    </BadgeContainer>
  );
};
