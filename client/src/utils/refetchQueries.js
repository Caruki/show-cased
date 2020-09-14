import { queryCache } from 'react-query';

function refetchQueries() {
  queryCache.invalidateQueries('user', {
    force: true,
  });
  queryCache.invalidateQueries('toWatchList', {
    force: true,
  });
  queryCache.invalidateQueries('watchedList', {
    force: true,
  });
  queryCache.invalidateQueries('recsGenres', {
    force: true,
  });
  queryCache.invalidateQueries('recsNetworks', {
    force: true,
  });
}

export default refetchQueries;
