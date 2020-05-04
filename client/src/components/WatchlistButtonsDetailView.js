import React, { useState, useEffect } from 'react';
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
import { useQuery, useMutation, queryCache } from 'react-query';
import { getUser } from '../api/users';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 0px 10px;

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
  font-style: ${(props) => (props.active ? 'italic' : 'normal')};
  font-size: 0.7rem;
  font-weight: 200;
  font-family: 'Roboto', sans-serif;
  color: #e7eaff;
  background: transparent;
`;

function WatchlistButtonsDetailView({ showDetails }) {
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  const selectedShow = {
    id: showDetails.id,
    poster: showDetails.poster_portrait,
    title: showDetails.title,
    genreIds: showDetails.genreIds,
    genreNames: showDetails.genreNames,
    networks: showDetails.networks,
    actors: showDetails.actors.map((actor) => {
      return actor.name;
    }),
  };

  const { data: user } = useQuery(['user', userId], getUser, {
    staleTime: 3600000,
  });
  const [addToWatch] = useMutation(addToWatchList, {
    onSuccess: () => {
      queryCache.refetchQueries('user', {
        force: true,
      });
      queryCache.refetchQueries('recsGenres', {
        force: true,
      });
      queryCache.refetchQueries('recsNetworks', {
        force: true,
      });
      queryCache.refetchQueries('toWatchList', {
        force: true,
      });
      queryCache.refetchQueries('watchedList', {
        force: true,
      });
    },
  });
  const [addToWatched] = useMutation(addToWatchedList, {
    onSuccess: () => {
      queryCache.refetchQueries('user', {
        force: true,
      });
      queryCache.refetchQueries('recsGenres', {
        force: true,
      });
      queryCache.refetchQueries('recsNetworks', {
        force: true,
      });
      queryCache.refetchQueries('toWatchList', {
        force: true,
      });
      queryCache.refetchQueries('watchedList', {
        force: true,
      });
    },
  });
  const [removeFromWatched] = useMutation(removeFromWatchedList, {
    onSuccess: () => {
      queryCache.refetchQueries('user', {
        force: true,
      });
      queryCache.refetchQueries('recsGenres', {
        force: true,
      });
      queryCache.refetchQueries('recsNetworks', {
        force: true,
      });
      queryCache.refetchQueries('toWatchList', {
        force: true,
      });
      queryCache.refetchQueries('watchedList', {
        force: true,
      });
    },
  });
  const [removeFromToWatch] = useMutation(removeFromToWatchList, {
    onSuccess: () => {
      queryCache.refetchQueries('user', {
        force: true,
      });
      queryCache.refetchQueries('recsGenres', {
        force: true,
      });
      queryCache.refetchQueries('recsNetworks', {
        force: true,
      });
      queryCache.refetchQueries('toWatchList', {
        force: true,
      });
      queryCache.refetchQueries('watchedList', {
        force: true,
      });
    },
  });

  const [watchlistAction, setWatchlistAction] = useState(
    user?.towatch.some((show) => show.id === selectedShow.id)
      ? 'addToWatchlist'
      : user?.watched.some((show) => show.id === selectedShow.id)
      ? 'addToWatched'
      : null
  );

  const addedToWatchlist = watchlistAction === 'addToWatchlist';
  const addedToWatched = watchlistAction === 'addToWatched';

  useEffect(() => {
    if (user) {
      if (user.towatch.some((show) => show.id === selectedShow.id)) {
        setWatchlistAction('addToWatchlist');
      } else if (user.watched.some((show) => show.id === selectedShow.id)) {
        setWatchlistAction('addToWatched');
      }
    }
  }, [user, selectedShow.id]);

  async function handleWatchlistClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromToWatch({ userId, selectedShow });
      setWatchlistAction(null);
    } else {
      await addToWatch({ userId, selectedShow });
      setWatchlistAction(targetWatchlistAction);
    }
  }

  async function handleWatchedClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromWatched({ userId, selectedShow });
      setWatchlistAction(null);
    } else {
      await addToWatched({ userId, selectedShow });
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
        <ToWatchButton active={addedToWatchlist} size="big" />
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
          defaultChecked={addedToWatched}
          onClick={handleWatchedClick}
        />

        <WatchedButton active={addedToWatched} size="big" />
        <WatchListCheckText active={addedToWatched}>
          Already watched
        </WatchListCheckText>
      </WatchListCheckLabel>
    </Container>
  );
}

WatchlistButtonsDetailView.propTypes = {
  showDetails: PropTypes.object,
};

export default WatchlistButtonsDetailView;
