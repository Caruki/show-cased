import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import ListItem from './ListItem';
import { getToWatchList, getWatchedList } from '../api/lists';
import { getShowDetails } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';
import useAuth from '../contexts/auth/useAuth';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 2fr));
  grid-gap: 1rem;
`;

function WatchLists({ tab }) {
  const [selectedItem, setSelectedItem] = useState({});
  const { isShowing, toggleModal } = useModal();
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  const { status: toWatchStatus, data: toWatchList } = useQuery(
    ['toWatchList', userId],
    getToWatchList,
    { staleTime: 3600000 }
  );
  const { status: watchedStatus, data: watchedList } = useQuery(
    ['watchedList', userId],
    getWatchedList,
    { staleTime: 3600000 }
  );
  const [loadShowDetails] = useMutation(getShowDetails);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  if ((toWatchStatus || watchedStatus) === 'loading') {
    return <span>Loading...</span>;
  }

  if ((toWatchStatus || watchedStatus) === 'error') {
    return <span>Error</span>;
  }

  return (
    <>
      <ShowDetailViewModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        showDetails={selectedItem}
      />
      {tab === 'toWatch' && (
        <ListContainer>
          {toWatchList.map((show) => (
            <ListItem
              poster={show.poster}
              title={show.title}
              rating={show.rating}
              key={show.id}
              id={show.id}
              onClick={() => {
                handleItemClick(show.id);
              }}
            />
          ))}
        </ListContainer>
      )}
      {tab === 'watched' && (
        <ListContainer>
          {watchedList.map((show) => (
            <ListItem
              poster={show.poster}
              title={show.title}
              rating={show.rating}
              key={show.id}
              id={show.id}
              onClick={() => {
                handleItemClick(show.id);
              }}
            />
          ))}
        </ListContainer>
      )}
    </>
  );
}

WatchLists.propTypes = {
  tab: PropTypes.string,
};

export default WatchLists;
