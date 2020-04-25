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
  max-height: 660px;
  flex: 1 1;
  margin: 60px 25px 60px 25px;
  background-color: #504481;
  border: 4px solid #1e194f;
  position: relative;
  & > * {
    box-sizing: border-box;
  }
`;

function ShowDetailViewModal({ showDetails }) {
  return (
    <Container>
      <CloseButton />
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
  handleClose: PropTypes.func,
  showDetails: PropTypes.object,
};

export default ShowDetailViewModal;
