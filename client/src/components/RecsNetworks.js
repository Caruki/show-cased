import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useMutation, usePaginatedQuery, queryCache } from 'react-query';
import ListItem from './ListItem';
import { getShowDetails } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';
import { getPaginatedRecsByNetworks } from '../api/recs';
import { GoBack, GoForward } from '../assets/RecsNavigation';
import Loading from '../utils/Loading';
import ErrorMessageRecs from './ErrorMessageRecs';

const Button = styled.button`
  display: flex;
  margin: 20px;
  justify-content: space-around;
  background-color: transparent;
  outline: hidden;
  text-decoration: none;
  border: transparent;
`;

const Heading = styled.div`
  text-align: center;
  font: 300 italic 1.3rem 'Roboto', sans-serif;
  text-shadow: 0px 0px 4px #d05888;
  color: #d05888;
  margin: 20px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 2fr));
  grid-gap: 1rem;
`;

function RecsNetworks({ userId }) {
  const [selectedItem, setSelectedItem] = useState({});
  const [page, setPage] = useState(1);
  const { isShowing, toggleModal } = useModal();
  const { status, resolvedData, latestData } = usePaginatedQuery(
    ['recsNetworks', userId, page],
    getPaginatedRecsByNetworks,
    {
      staleTime: 3600000,
      retry: false,
    }
  );

  const [loadShowDetails] = useMutation(getShowDetails);

  React.useEffect(() => {
    if (!latestData?.maxPageReached) {
      queryCache.prefetchQuery(
        ['recsNetworks', userId, page + 1],
        getPaginatedRecsByNetworks
      );
    }
  }, [latestData, userId, page]);

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
      <Button
        onClick={() => setPage((old) => Math.max(old - 2, 1))}
        disabled={page === 1}
      >
        <GoBack disabled={page === 1} />
      </Button>
      <Heading>Networks</Heading>
      <Button
        onClick={() =>
          setPage((old) =>
            !latestData || latestData?.maxPageReached ? old : old + 1
          )
        }
        disabled={latestData?.maxPageReached}
      >
        <GoForward disabled={latestData?.maxPageReached} />
      </Button>
      {status === 'error' && <ErrorMessageRecs />}
      {status === 'loading' && <Loading />}
      <ListContainer>
        {resolvedData?.recs.map((show) => (
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
      )
    </>
  );
}

RecsNetworks.propTypes = {
  userId: PropTypes.number,
};

export default RecsNetworks;
