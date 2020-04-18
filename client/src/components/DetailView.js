import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CloseButton from './CloseButton';
import Poster from './Poster';
import TitleSection from './TitleSection';
import OverviewTextarea from './OverviewTextarea';
import GenreList from './GenreList';
import ActorList from './ActorList';
import WatchlistIcon from '../assets/watchlist-icon.svg';
import WatchlistIconClicked from '../assets/watchlist-icon-clicked.svg';
import WatchedIcon from '../assets/watched-icon.svg';
import WatchedIconClicked from '../assets/watched-icon-clicked.svg';

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

const WatchlistCheckContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding-bottom: 10px;
  margin: 5px 10px;
`;

const WatchListCheckLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  & > * {
    margin: 2.5px 0px;
  }
`;

const WatchListCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  user-select: none;
`;

const WatchListCheckText = styled.div`
  display: block;
  font-style: ${(props) => (props.checked ? 'italic' : 'normal')};
  font-size: 0.7rem;
  font-weight: 200;
  font-family: 'Roboto', sans-serif;
  color: #e7eaff;
  background: transparent;
`;

function DetailView({
  showPoster,
  showTitle,
  showRating,
  showOverview,
  showGenres,
  showActors,
}) {
  const [watchlistAction, setWatchlistAction] = useState(null);

  const addedToWatchlist = watchlistAction === 'addToWatchlist';
  const addedToWatched = watchlistAction === 'addToWatched';

  function handleWatchlistActionClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      setWatchlistAction(null);
    } else {
      setWatchlistAction(targetWatchlistAction);
    }
  }
  return (
    <Container>
   <CloseButton />
    <Poster showPoster={showPoster} />
    <TitleSection showRating={showRating} showTitle={showTitle} />
    <OverviewTextarea showOverview={showOverview} />
    <GenreList genres={showGenres} />
      <ActorList actors={showActors} />
      <WatchlistCheckContainer>
        <WatchListCheckLabel>
          <WatchListCheck
            type="radio"
            value="addToWatchlist"
            checked={addedToWatchlist}
            onClick={handleWatchlistActionClick}
          />
          {addedToWatchlist ? (
            <img
              src={WatchlistIconClicked}
              alt="star icon to symbolize watchlist"
            />
          ) : (
            <img src={WatchlistIcon} alt="star icon to symbolize watchlist" />
          )}
          {addedToWatchlist ? (
            <WatchListCheckText checked={addedToWatchlist}>
              Added to watchlist
            </WatchListCheckText>
          ) : (
            <WatchListCheckText checked={addedToWatchlist}>
              Add to watchlist
            </WatchListCheckText>
          )}
        </WatchListCheckLabel>

        <WatchListCheckLabel>
          <WatchListCheck
            type="radio"
            value="addToWatched"
            checked={addedToWatched}
            onClick={handleWatchlistActionClick}
          />
          {addedToWatched ? (
            <img
              src={WatchedIconClicked}
              alt="check mark icon to symbolize already watched list"
            />
          ) : (
            <img
              src={WatchedIcon}
              alt="check mark icon to symbolize already watched list"
            />
          )}
          <WatchListCheckText checked={addedToWatched}>
            Already watched
          </WatchListCheckText>
        </WatchListCheckLabel>
      </WatchlistCheckContainer>
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
