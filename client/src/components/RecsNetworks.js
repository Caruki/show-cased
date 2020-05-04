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

const Button = styled.button`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`;

const Heading = styled.div`
  text-align: center;
  font: 100 italic 1.2rem 'Roboto', sans-serif;
  text-decoration: underline;
  text-shadow: 0px 0px 4px #d05888;
  color: #d05888;
  margin: 10px;
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
  const {
    status: recsNetworksStatus,
    resolvedData,
    latestData,
  } = usePaginatedQuery(
    ['recsNetworks', userId, page],
    getPaginatedRecsByNetworks,
    {
      staleTime: 3600000,
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

  if (recsNetworksStatus === 'loading') {
    return <span>Loading...</span>;
  }

  if (recsNetworksStatus === 'error') {
    return <span>Error</span>;
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
            !latestData || latestData.maxPageReached ? old : old + 1
          )
        }
        disabled={latestData.maxPageReached}
      >
        <GoForward disabled={latestData.maxPageReached} />
      </Button>
      <ListContainer>
        {resolvedData.recs.map((show) => (
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
    </>
  );
}

RecsNetworks.propTypes = {
  userId: PropTypes.number,
};

export default RecsNetworks;
