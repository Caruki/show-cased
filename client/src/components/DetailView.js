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


function DetailView({
  showPoster,
  showTitle,
  showRating,
  showOverview,
  showGenres,
  showActors,
}) {
  return (
    <Container>
<CloseButton />
    <Poster showPoster={showPoster} />
    <TitleSection showRating={showRating} showTitle={showTitle} />
    <OverviewTextarea showOverview={showOverview} />
    <GenreList genres={showGenres} />
      <ActorList actors={showActors} />
      <WatchlistButtons />
    </Container>
  );
}

DetailView.propTypes = {
  handleClose: PropTypes.func,
  showModal: PropTypes.bool,
  showPoster: PropTypes.string,
  showTitle: PropTypes.string,
  showRating: PropTypes.number,
  showOverview: PropTypes.string,
  showGenres: PropTypes.array,
  showActors: PropTypes.array,
  checked: PropTypes.bool,
};

export default DetailView;
