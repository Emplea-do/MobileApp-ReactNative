import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Ajustes</Text>
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
