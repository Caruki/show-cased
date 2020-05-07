import React from 'react';
import SelectShowsForm from '../components/SelectShowsForm';

export default {
  title: 'Search for Shows Form',
};

export const ToWatchShows = () => {
  return <SelectShowsForm textvariation="want to watch" />;
};

export const WatchedShows = () => {
  return <SelectShowsForm textvariation="have watched" />;
};
