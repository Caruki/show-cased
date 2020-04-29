import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import WatchlistIcon from '../assets/watchlist-icon.svg';
import WatchlistIconClicked from '../assets/watchlist-icon-clicked.svg';
import WatchedIcon from '../assets/watched-icon.svg';
import WatchedIconClicked from '../assets/watched-icon-clicked.svg';
import { addToWatchList, addToWatchedList } from '../api/lists';
import useAuth from '../contexts/auth/useAuth';
import { useMutation } from 'react-query/types';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 10px 10px;

  & :focus-within {
    outline-width: 0;
    border: 1px solid #aeb2f5;
    border-radius: 8px;
  }
`;

const WatchListCheckLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 5px;
  padding: 5px;
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

function WatchlistButtons({ showDetails }) {
  const { authenticatedUser } = useAuth();
  const [watchlistAction, setWatchlistAction] = useState(null);
  const selectedShow = {
    id: showDetails.id,
    title: showDetails.title,
    genres: showDetails.genres,
    actors: showDetails.actors.map((actor) => {
      return actor.name;
    }),
  };
  const [addWatchedList] = useMutation(addToWatchedList);
  const [addWatchList] = useMutation(addToWatchList);

  const addedToWatchlist = watchlistAction === 'addToWatchlist';
  const addedToWatched = watchlistAction === 'addToWatched';

  async function handleWatchlistClick(event) {
    await addWatchList(authenticatedUser.userId, selectedShow);

    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      setWatchlistAction(null);
    } else {
      setWatchlistAction(targetWatchlistAction);
    }
  }

  async function handleWatchedClick(event) {
    await addWatchedList(authenticatedUser.userId, selectedShow);

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
          onClick={handleWatchlistClick}
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
          <WatchListCheckText active={addedToWatchlist}>
            Added to watchlist
          </WatchListCheckText>
        ) : (
          <WatchListCheckText active={addedToWatchlist}>
            Add to watchlist
          </WatchListCheckText>
        )}
      </WatchListCheckLabel>

      <WatchListCheckLabel>
        <WatchListCheck
          type="radio"
          value="addToWatched"
          checked={addedToWatched}
          onClick={handleWatchedClick}
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

WatchlistButtons.propTypes = {
  showDetails: PropTypes.object,
};

export default WatchlistButtons;
