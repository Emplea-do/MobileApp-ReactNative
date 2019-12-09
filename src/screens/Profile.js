import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Perfil</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { marginTop: 50, fontSize: 25 },
});

