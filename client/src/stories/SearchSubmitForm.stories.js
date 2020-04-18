import React from 'react';
import SearchSubmitForm from '../components/SearchSubmitForm';

export default {
  title: 'Search for Shows Form',
};

export const ToWatchShows = () => {
  return <SearchSubmitForm textvariation="want to watch" />;
};

export const WatchedShows = () => {
  return <SearchSubmitForm textvariation="have watched" />;
};
