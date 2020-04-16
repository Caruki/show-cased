import React, { useState } from 'react';
import styled from '@emotion/styled';
import WatchlistIcon from '../assets/watchlist-icon.svg';
import WatchlistIconClicked from '../assets/watchlist-icon-clicked.svg';
import WatchedIcon from '../assets/watched-icon.svg';
import WatchedIconClicked from '../assets/watched-icon-clicked.svg';

const Container = styled.div`
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

function WatchlistButtons() {
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
    </Container>
  );
}

export default WatchlistButtons;
