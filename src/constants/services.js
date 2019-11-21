const API_BASE_URL = 'https://emplea-apm.azure-api.net/v1/api';

export default {
  Api: {
    JobUrl: {
      getAll: `${API_BASE_URL}/jobs`,
      getDetailById: `${API_BASE_URL}/detail`,
    },
  },
};
