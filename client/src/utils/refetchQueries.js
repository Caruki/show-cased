import { queryCache } from 'react-query';

function refetchQueries() {
  queryCache.invalidateQueries('user');
  queryCache.invalidateQueries('toWatchList');
  queryCache.invalidateQueries('watchedList');
  queryCache.invalidateQueries('recsGenres');
  queryCache.invalidateQueries('recsNetworks');
}

export default refetchQueries;
