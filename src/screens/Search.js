import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Switch} from 'react-native-switch';
import {AppHeader, AppText} from '../components';
import {colors} from '../theme';

const SearchScreen = () => {
  const [remoteOnly, setRemoteOnly] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <AppHeader style={styles.header}>
        Hola, ¿Qué tipo de trabajo estas buscando?
      </AppHeader>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.textInputSearch}
          underlineColorAndroid={colors.input}
          placeholder="Keywords"
        />
      </View>

      <AppHeader style={styles.textCategory}>Buscar por Categoría</AppHeader>

      <View style={styles.categoryCards}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {new Array(6).fill('').map((elem, i) => (
            <View style={styles.card} key={i}>
              <AppText>card</AppText>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.swithJobsRemote}>
        <AppText style={styles.textJobsRemote}>
          Buscar solo empleos remotos
        </AppText>
        <Switch
          value={remoteOnly}
          onValueChange={setRemoteOnly}
          backgroundActive={'#12bac3'}
          backgroundInactive={'gray'}
          circleBorderWidth={0}
          barHeight={32}
          circleSize={30}
          switchLeftPx={2.2}
          switchRightPx={2.2}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 60,
  },
  header: {
    marginTop: 5,
    paddingBottom: 30,
    fontSize: 30,
    letterSpacing: 0.29,
  },
  textCategory: {
    paddingTop: 20,
    fontSize: 20,
  },
  categoryCards: {
    flexDirection: 'row',
  },
  card: {
    width: 110,
    height: 110,
    borderRadius: 4,
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: colors.cardBackground,
  },
  searchBox: {
    marginRight: 20,
  },
  textJobsRemote: {
    fontSize: 18,
    justifyContent: 'flex-start',
    fontFamily: 'SFProDisplay-Medium',
  },
  swithJobsRemote: {
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  textInputSearch: {
    fontSize: 20,
    paddingRight: 20,
    fontFamily: 'SFProDisplay-Medium',
  },
  buttonContainer: {
    marginRight: 20,
    backgroundColor: '#12bac3',
    paddingVertical: 20,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 30,
  },
});

export default SearchScreen;
