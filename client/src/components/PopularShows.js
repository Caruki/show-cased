import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import ListItem from './ListItem';
import { getNewestShows, getShowDetails, getTrendingShows } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

function PopularShows({ tab }) {
  const [selectedItem, setSelectedItem] = useState({});
  const { isShowing, toggleModal } = useModal();
  const {
    status: newestStatus,
    data: newestShowsList,
  } = useQuery('newestShows', getNewestShows, { staleTime: 3600000 });
  const {
    status: trendingStatus,
    data: trendingShowsList,
  } = useQuery('trendingShows', getTrendingShows, { staleTime: 3600000 });
  const [loadShowDetails] = useMutation(getShowDetails);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  if ((trendingStatus || newestStatus) === 'loading') {
    return <span>Loading...</span>;
  }

  if ((trendingStatus || newestStatus) === 'error') {
    return <span>Error</span>;
  }

  return (
    <>
      <ShowDetailViewModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        showDetails={selectedItem}
      />
      {tab === 'newest' && (
        <ListContainer>
          {newestShowsList.map((show) => (
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
      {tab === 'trending' && (
        <ListContainer>
          {trendingShowsList.map((show) => (
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

PopularShows.propTypes = {
  tab: PropTypes.string,
};

export default PopularShows;
