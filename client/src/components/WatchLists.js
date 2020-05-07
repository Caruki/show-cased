import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import WatchListItem from './WatchListItem';
import { getToWatchList, getWatchedList } from '../api/lists';
import { getShowDetails } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';
import useAuth from '../contexts/auth/useAuth';
import Loading from '../utils/Loading';
import { toast } from 'react-toastify';
import SelectShowsForm from '../components/SelectShowsForm';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import SearchInput from './SearchInput';

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
  const { searchActive, toggleSearchActive } = useSideNavInformation();
  const userId = authenticatedUser.userId;
  const {
    status: toWatchStatus,
    data: toWatchList,
    error: toWatchShowsError,
  } = useQuery(['toWatchList', userId], getToWatchList, { retry: 2 });
  const {
    status: watchedStatus,
    data: watchedList,
    error: watchedShowsError,
  } = useQuery(['watchedList', userId], getWatchedList, { retry: 2 });
  const [loadShowDetails] = useMutation(getShowDetails);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  async function handleSearchSelect(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleSearchActive();
    toggleModal();
  }

  return (
    <>
      <ShowDetailViewModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        showDetails={selectedItem}
      />
      {tab === 'towatch' &&
        toWatchShowsError &&
        toast.error(toWatchShowsError.message, {
          closeOnClick: true,
          closeButton: true,
          autoClose: '5000',
        })}
      {tab === 'towatch' && toWatchStatus === 'loading' && <Loading />}
      <SearchInput
        isOpen={searchActive}
        onSelect={(searchResult) => handleSearchSelect(searchResult.id)}
        toggleSearchActive={toggleSearchActive}
      />

      {tab === 'towatch' && (!toWatchList || !toWatchList.length) && (
        <SelectShowsForm tab={tab} textvariation="want to watch" />
      )}
      {tab === 'watched' && (!watchedList || !watchedList.length) && (
        <SelectShowsForm tab={tab} textvariation="have watched" />
      )}

      {tab === 'towatch' && (
        <ListContainer>
          {toWatchList?.map((show) => (
            <WatchListItem
              poster={show.poster}
              title={show.title}
              key={show.id}
              id={show.id}
              show={show}
              onClick={() => {
                handleItemClick(show.id);
              }}
            />
          ))}
        </ListContainer>
      )}
      {tab === 'watched' &&
        watchedShowsError &&
        toast.error(watchedShowsError.message, {
          closeOnClick: true,
          closeButton: true,
          autoClose: '5000',
        })}
      {tab === 'watched' && watchedStatus === 'loading' && <Loading />}
      {tab === 'watched' && (
        <ListContainer>
          {watchedList?.map((show) => (
            <WatchListItem
              poster={show.poster}
              title={show.title}
              key={show.id}
              id={show.id}
              show={show}
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
