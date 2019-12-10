import { useEffect, useState } from 'react';
import api from '../utils/api';
import axios from 'axios';

export function useJobsSearch() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const pageSize = 10;
    let cancel;

    api({
      method: 'GET',
      url: `/jobs/?Page=${page}&PageSize=${pageSize}`,
      cancelToken: new axios.CancelToken(c => {
        cancel = c;
      }),
    })
      .then(res => {
        const { Jobs, PagesCount, TotalItemCount } = res.data;
        setCount(TotalItemCount);
        setJobs(prevJobs => {
          return [...new Set([...prevJobs, ...Jobs])];
        });
        setHasMore(page < PagesCount);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
      });
    return () => cancel();
  }, [page]);

  return { loading, setLoading, page, setPage, error, jobs, hasMore, count };
}
