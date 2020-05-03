import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { WatchedButton, ToWatchButton } from '../assets/WatchListIcons';
import {
  addToWatchList,
  addToWatchedList,
  removeFromWatchedList,
  removeFromToWatchList,
} from '../api/lists';
import useAuth from '../contexts/auth/useAuth';
import { useQuery } from 'react-query';
import { getUser } from '../api/users';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  & :focus-within {
    outline-width: 0;
    border: 1px solid rgb(208, 88, 136, 0.5);
    border-radius: 3px;
  }
`;

const WatchListCheckLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
  margin: 2.5px;
  padding: 0px 5px;

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

function WatchlistButtonsListView({ listShow, id }) {
  const { authenticatedUser } = useAuth();
  const { data: user } = useQuery(['user', authenticatedUser.userId], getUser, {
    staleTime: 3600000,
  });
  const [watchlistAction, setWatchlistAction] = useState(
    user?.towatch.some((show) => show.id === listShow.id)
      ? 'addToWatchlist'
      : user?.watched.some((show) => show.id === listShow.id)
      ? 'addToWatched'
      : null
  );

  const addedToWatchlist = watchlistAction === 'addToWatchlist';
  const addedToWatched = watchlistAction === 'addToWatched';

  React.useEffect(() => {
    if (user) {
      if (user.towatch.some((show) => show.id === listShow.id)) {
        setWatchlistAction('addToWatchlist');
      } else if (user.watched.some((show) => show.id === listShow.id)) {
        setWatchlistAction('addToWatched');
      }
    }
  }, [user, listShow.id]);

  async function handleWatchlistClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromToWatchList(authenticatedUser.userId, listShow);
      setWatchlistAction(null);
    } else {
      await addToWatchList(authenticatedUser.userId, listShow);
      setWatchlistAction(targetWatchlistAction);
    }
  }

  async function handleWatchedClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromWatchedList(authenticatedUser.userId, listShow);
      setWatchlistAction(null);
    } else {
      await addToWatchedList(authenticatedUser.userId, listShow);
      setWatchlistAction(targetWatchlistAction);
    }
  }

  return (
    <Container>
      <WatchListCheckLabel>
        <WatchListCheck
          type="radio"
          value="addToWatchlist"
          defaultChecked={addedToWatchlist}
          onClick={handleWatchlistClick}
        />
        <ToWatchButton active={addedToWatchlist} size="small" id={id} />
      </WatchListCheckLabel>

      <WatchListCheckLabel>
        <WatchListCheck
          type="radio"
          value="addToWatched"
          defaultChecked={addedToWatched}
          onClick={handleWatchedClick}
        />

        <WatchedButton active={addedToWatched} size="small" id={id} />
      </WatchListCheckLabel>
    </Container>
  );
}

WatchlistButtonsListView.propTypes = {
  listShow: PropTypes.object,
  id: PropTypes.number,
};

export default WatchlistButtonsListView;
