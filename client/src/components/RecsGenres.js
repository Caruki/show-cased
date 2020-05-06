import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useMutation, usePaginatedQuery, queryCache } from 'react-query';
import ListItem from './ListItem';
import { getShowDetails } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';
import useModal from '../hooks/useModal';
import { getPaginatedRecsByGenres } from '../api/recs';
import { GoBack, GoForward } from '../assets/RecsNavigation';
import Loading from '../utils/Loading';

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
  font: 100 italic 1.2rem 'Roboto', sans-serif;
  text-decoration: underline;
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

function RecsGenres({ userId }) {
  const [selectedItem, setSelectedItem] = useState({});
  const [page, setPage] = useState(1);
  const { isShowing, toggleModal } = useModal();
  const { status, resolvedData, latestData } = usePaginatedQuery(
    ['recsGenres', userId, page],
    getPaginatedRecsByGenres,
    {
      staleTime: 3600000,
    }
  );

  const [loadShowDetails] = useMutation(getShowDetails);

  React.useEffect(() => {
    if (!latestData?.maxPageReached) {
      queryCache.prefetchQuery(
        ['recsGenres', userId, page + 1],
        getPaginatedRecsByGenres
      );
    }
  }, [latestData, userId, page]);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  if (status === 'error') {
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
      <Heading>Genres</Heading>
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
    </>
  );
}

RecsGenres.propTypes = {
  userId: PropTypes.number,
};

export default RecsGenres;
