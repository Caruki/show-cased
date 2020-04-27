import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery, useMutation } from 'react-query';
import ListItem from './ListItem';
import { getNewestShows, getShowDetails } from '../api/shows';
import ShowDetailViewModal from './ShowDetailViewModal';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

function NewestShows() {
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { status, data: newestShowsList, error } = useQuery(
    'newestShows',
    getNewestShows
  );
  const [
    loadShowDetails,
    // { status: showDetailsStatus, error: showDetailsError },
  ] = useMutation(getShowDetails);

  async function handleItemClick(showId) {
    const showDetails = await loadShowDetails(showId);
    setSelectedItem(showDetails);
    toggleModal();
  }

  function toggleModal() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {showModal && (
        <ShowDetailViewModal
          toggleModal={toggleModal}
          showDetails={selectedItem}
        />
      )}
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
    </>
  );
}

export default NewestShows;
