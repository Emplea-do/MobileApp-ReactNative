import axios from 'axios';
import { API_SUBSCRIPTION_KEY } from 'react-native-dotenv';

const API_BASE_URL = 'https://emplea-apm.azure-api.net/v1/api';

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': API_SUBSCRIPTION_KEY,
  },
});

export default API;
