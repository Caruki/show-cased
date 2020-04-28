import React from 'react';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import PopularShows from '../components/PopularShows';

function Popular() {
  const { tabContent } = useSideNavInformation();

  return (
    <>
      {tabContent === 'default' && <PopularShows tab="trending" />}
      {tabContent === 'Trending' && <PopularShows tab="trending" />}
      {tabContent === 'Newest' && <PopularShows tab="newest" />}
    </>
  );
}

export default Popular;
