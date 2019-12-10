import React from 'react';
import { Container } from '../../components/Container';
import JobCard from '../../components/JobCard';
import { Loading } from '../../components/Loading';
import { useJobsSearch } from '../../hooks/useJobsSearch';
import { NoMoreJobs, ResultsTitle, SearchResult } from './styles';

const ListingScreen = () => {
  const {
    loading,
    setLoading,
    page,
    setPage,
    error,
    jobs,
    hasMore,
    count,
  } = useJobsSearch();

  const renderFooter = () => {
    if (!hasMore && jobs.length > 0) {
      return <NoMoreJobs>No hay mas empleos.</NoMoreJobs>;
    }

    if (!loading) {
      return null;
    }

    return <Loading />;
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  const initialLoading = loading && jobs.length === 0;

  return (
    <Container behavior="position">
      {initialLoading ? (
        <Loading />
      ) : (
        <>
          <ResultsTitle>{count} empleos disponibles</ResultsTitle>

          <SearchResult
            numColumns={1}
            data={jobs}
            renderItem={job => <JobCard {...job} />}
            keyExtractor={item => item.Link}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </>
      )}
    </Container>
  );
};

ListingScreen.navigationOptions = screenProps => {
  const query = screenProps.navigation.getParam('query');
  const title = query && query !== '' ? query : 'Resultados';
  return {
    title,
  };
};

export default ListingScreen;
