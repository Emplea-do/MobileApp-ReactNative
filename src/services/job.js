import axios from 'axios';
import SERVICE from '../constants/services';

/**
 * Fetch all job available.
 *
 * @param {Object} QueryParams
 */
const fetchAllJobs = ({pageNumber = 0, pageSize = 15} = {}) => {
  return axios.get(
    `${SERVICE.Api.JobUrl.getAll}/?Page=${pageNumber}&PageSize=${pageSize}`,
  );
};

/**
 *  Fetch detail about a job.
 *
 * @param {Number} jobId
 */
const fetchJobDetailById = jobId => {
  return axios.get(`${SERVICE.Api.JobUrl.getDetailById}/${jobId}`);
};

export {fetchAllJobs, fetchJobDetailById};
