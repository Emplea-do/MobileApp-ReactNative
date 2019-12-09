 import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import axios from 'axios';
import { API_SUBSCRIPTION_KEY } from 'react-native-dotenv';

axios.defaults.headers.common = {
  'Ocp-Apim-Subscription-Key': API_SUBSCRIPTION_KEY,
};

AppRegistry.registerComponent(appName, () => App);
