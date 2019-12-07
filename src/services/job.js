import { API } from '../utils';
import { SERVICE } from '../constants';

/**
 * Fetch all job available.
 *
 * @param {Object} QueryParams
 */
const fetchAllJobs = ({ pageNumber = 0, pageSize = 15 } = {}) => {
  const params = {
    url: `${SERVICE.jobUrl}/?Page=${pageNumber}&PageSize=${pageSize}`,
    method: 'get',
  };

  return API.request(params);
};

/**
 *  Fetch detail about a job.
 *
 * @param {Number} jobId
 */
const fetchJobDetailById = jobId => {
  const params = {
    url: `${SERVICE.jobUrl.getDetailById}/${jobId}`,
    method: 'get',
  };

  return API.request(params);
};

export const jobService = { fetchAllJobs, fetchJobDetailById };
