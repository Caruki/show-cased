import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CloseButton from './CloseButton';
import Poster from './Poster';
import TitleSection from './TitleSection';
import OverviewTextarea from './OverviewTextarea';
import GenreList from './GenreList';
import ActorList from './ActorList';
import WatchlistButtonsDetailView from './WatchlistButtonsDetailView';
import { useLocation } from 'react-router-dom';

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(14, 5, 46, 0.2);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 350px;
  min-height: 550px;
  max-height: 90%;
  padding: 20px;
  @media (min-width: 700px) {
    max-width: 650px;
  }
  flex: 1 0;
  background-color: #504481;
  border: 4px solid #1e194f;
  position: absolute;
`;

function ShowDetailViewModal({ showDetails, toggleModal, isShowing }) {
  const location = useLocation();

  return (
    <>
      {isShowing ? (
        <Background>
          <Container big={location.pathname === '/recs'}>
            <CloseButton onClick={toggleModal} />
            <Poster showPoster={showDetails.poster_landscape} />
            <TitleSection
              showRating={showDetails.rating}
              showTitle={showDetails.title}
              showTrailer={showDetails.trailer}
            />
            <OverviewTextarea showOverview={showDetails.overview} />
            <GenreList genres={showDetails.genreNames} />
            <ActorList actors={showDetails.actors} />
            <WatchlistButtonsDetailView showDetails={showDetails} />
          </Container>
        </Background>
      ) : null}
    </>
  );
}

ShowDetailViewModal.propTypes = {
  showDetails: PropTypes.object,
  toggleModal: PropTypes.func,
  isShowing: PropTypes.bool,
};

export default ShowDetailViewModal;
