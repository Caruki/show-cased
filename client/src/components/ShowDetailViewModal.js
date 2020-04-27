import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CloseButton from './CloseButton';
import Poster from './Poster';
import TitleSection from './TitleSection';
import OverviewTextarea from './OverviewTextarea';
import GenreList from './GenreList';
import ActorList from './ActorList';
import WatchlistButtons from './WatchlistButtons';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  top: 60px;
  right: 10px;
  left: 40px;
  height: 660px;
  @media (min-width: 700px) {
    height: 850px;
  }
  flex: 1 0;
  background-color: #504481;
  border: 4px solid #1e194f;
  position: absolute;
`;

function ShowDetailViewModal({ showDetails, toggleModal }) {
  return (
    <Container>
      <CloseButton onClick={() => toggleModal()} />
      <Poster showPoster={showDetails.poster} />
      <TitleSection
        showRating={showDetails.rating}
        showTitle={showDetails.title}
      />
      <OverviewTextarea showOverview={showDetails.overview} />
      <GenreList genres={showDetails.genres} />
      <ActorList actors={showDetails.actors} />
      <WatchlistButtons />
    </Container>
  );
}

ShowDetailViewModal.propTypes = {
  showDetails: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default ShowDetailViewModal;
