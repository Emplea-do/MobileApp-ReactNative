import React from 'react';
import { CATEGORIES } from '../../constants';
import { Category, Icon, List, Title } from './styles';

export const CategoryList = () => {
  return (
    <List horizontal={true} showsHorizontalScrollIndicator={false}>
      {CATEGORIES.map(category => {
        return (
          <Category key={category.id}>
            <Icon source={category.icon} />
            <Title>{category.title}</Title>
          </Category>
        );
      })}
    </List>
  );
};
