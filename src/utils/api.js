import axios from 'axios';

const API_BASE_URL = 'https://emplea-apm.azure-api.net/v1/api';

const API = axios.create({
  baseUrl: API_BASE_URL,
});

export default API;
