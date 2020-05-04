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
import { useQuery, useMutation, queryCache } from 'react-query';
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
  const userId = authenticatedUser.userId;
  const { data: user } = useQuery(['user', authenticatedUser.userId], getUser, {
    staleTime: 3600000,
  });

  const [addToWatch] = useMutation(addToWatchList, {
    onSuccess: () => {
      queryCache.refetchQueries('user', {
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
      queryCache.refetchQueries('toWatchList', {
        force: true,
      });
      queryCache.refetchQueries('watchedList', {
        force: true,
      });
    },
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

  // React.useEffect(() => {
  //   if (user) {
  //     if (user.towatch.some((show) => show.id === listShow.id)) {
  //       setWatchlistAction('addToWatchlist');
  //     } else if (user.watched.some((show) => show.id === listShow.id)) {
  //       setWatchlistAction('addToWatched');
  //     }
  //   }
  // }, [user, listShow.id]);

  async function handleToWatchClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromToWatch({ userId, listShow });
      setWatchlistAction(null);
    } else {
      await addToWatch({ userId, listShow });
      setWatchlistAction(targetWatchlistAction);
    }
  }

  async function handleWatchedClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      await removeFromWatched({ userId, listShow });
      setWatchlistAction(null);
    } else {
      await addToWatched({ userId, listShow });
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
          onClick={handleToWatchClick}
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
