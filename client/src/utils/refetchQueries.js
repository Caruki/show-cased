import { queryCache } from 'react-query';

function refetchQueries() {
  queryCache.refetchQueries('user', {
    force: true,
  });
  queryCache.refetchQueries('toWatchList', {
    force: true,
  });
  queryCache.refetchQueries('watchedList', {
    force: true,
  });
  queryCache.refetchQueries('recsGenres', {
    force: true,
  });
  queryCache.refetchQueries('recsNetworks', {
    force: true,
  });
}

export default refetchQueries;
