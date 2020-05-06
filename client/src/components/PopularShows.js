import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import ListItem from './ListItem';
import { getNewestShows, getShowDetails, getTrendingShows } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';
import Loading from '../utils/Loading';
import { toast } from 'react-toastify';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 2fr));
  grid-gap: 1rem;
`;

function PopularShows({ tab }) {
  const [selectedItem, setSelectedItem] = useState({});
  const { isShowing, toggleModal } = useModal();
  const {
    status: newestStatus,
    data: newestShowsList,
    error: newestShowsError,
  } = useQuery('newestShows', getNewestShows, { retry: 1 });
  const {
    status: trendingStatus,
    data: trendingShowsList,
    error: trendingShowsError,
  } = useQuery('trendingShows', getTrendingShows, { retry: 1 });
  const [loadShowDetails] = useMutation(getShowDetails);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  return (
    <>
      <ShowDetailViewModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        showDetails={selectedItem}
      />
      {tab === 'newest' &&
        newestShowsError &&
        toast.error(newestShowsError.message, {
          closeOnClick: true,
          closeButton: true,
          autoClose: '5000',
        })}
      {tab === 'newest' && newestStatus === 'loading' && <Loading />}
      {tab === 'newest' && (
        <ListContainer>
          {newestShowsList?.map((show) => (
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

      {tab === 'trending' &&
        trendingShowsError &&
        toast.error(trendingShowsError.message, {
          closeOnClick: true,
          closeButton: true,
          autoClose: '5000',
        })}
      {tab === 'trending' && trendingStatus === 'loading' && <Loading />}
      {tab === 'trending' && (
        <ListContainer>
          {trendingShowsList?.map((show) => (
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
