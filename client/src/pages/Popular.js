import React from 'react';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import NewestShows from '../components/NewestShows';
import TrendingShows from '../components/TrendingShows';

function Popular() {
  const { tabContent } = useSideNavInformation();

  return (
    <>
      {tabContent === 'default' && <TrendingShows />}
      {tabContent === 'Trending' && <TrendingShows />}
      {tabContent === 'Newest' && <NewestShows />}
    </>
  );
}

export default Popular;
