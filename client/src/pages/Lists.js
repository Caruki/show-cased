import React from 'react';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import ToWatchList from '../components/ToWatchList';
import WatchedList from '../components/WatchedList';

function Lists() {
  const { tabContent } = useSideNavInformation();

  return (
    <>
      {tabContent === 'default' && <WatchedList />}
      {tabContent === 'Watched' && <WatchedList />}
      {tabContent === 'ToWatch' && <ToWatchList />}
    </>
  );
}

export default Lists;
