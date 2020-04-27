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
  top: 70px;
  right: 15px;
  left: 40px;
  height: 650px;
  @media (min-width: 700px) {
    height: 850px;
  }
  flex: 1 0;
  background-color: #504481;
  border: 4px solid #1e194f;
  position: absolute;
`;

function ShowDetailViewModal({ showDetails, toggleModal, isShowing }) {
  return (
    <>
      {isShowing ? (
        <Background>
          <Container>
            <CloseButton onClick={toggleModal} />
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
