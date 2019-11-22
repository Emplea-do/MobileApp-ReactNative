import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Switch} from 'react-native-switch';

export default class SearchScreen extends React.Component {
  state = {
    switchValue: false,
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.text}>
          Hola, ¿Qué tipo de trabajo estas buscando?
        </Text>
        <TextInput
          style={styles.textInputSearch}
          underlineColorAndroid={'#12bac3'}
          placeholder="Keywords"
        />

        <Text style={styles.textCategory}>Buscar por Categoría</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.textJobsRemote}>
              Buscar solo empleos remotos
            </Text>
          </View>
          <View style={styles.swithJobsRemote}>
            <Switch
              value={this.state.switchValue}
              onValueChange={switchValue => this.setState({switchValue})}
              backgroundActive={'#12bac3'}
              backgroundInactive={'gray'}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textCategory: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textJobsRemote: {
    marginTop: 0,
    marginLeft: 20,
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  swithJobsRemote: {
    justifyContent: 'flex-end',
    marginRight: 50,
  },
  textInputSearch: {
    marginLeft: 20,
    marginEnd: 45,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#12bac3',
    marginTop: 150,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
