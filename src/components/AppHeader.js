import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppHeader = ({ children, style, ...props }) => {
  return (
    <Text {...props} style={[styles.text, { ...style }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProDisplay-Bold',
  },
});

export default AppHeader;
