import React from 'react';
import {Text, View} from 'react-native';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 50, fontSize: 25}}>Buscar</Text>
      </View>
    );
  }
}
