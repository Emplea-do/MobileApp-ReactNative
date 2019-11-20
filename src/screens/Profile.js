import React from 'react';
import {Text, View} from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 50, fontSize: 25}}>Perfil</Text>
      </View>
    );
  }
}
