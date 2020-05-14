import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from 'react-query';
import { WatchedButton, ToWatchButton } from '../assets/icons/WatchListIcons';
import {
  addToWatchList,
  addToWatchedList,
  removeFromWatchedList,
  removeFromToWatchList,
} from '../api/lists';
import useAuth from '../contexts/auth/useAuth';
import refetchQueries from '../utils/refetchQueries';
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

function WatchlistButtonsListView({ selectedShow, id }) {
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  const { data: user } = useQuery(['user', authenticatedUser.userId], getUser, {
    staleTime: 3600000,
  });

  const [addToWatch] = useMutation(addToWatchList, {
    onSuccess: () => {
      refetchQueries();
    },
  });
  const [addToWatched] = useMutation(addToWatchedList, {
    onSuccess: () => {
      refetchQueries();
    },
  });
  const [removeFromWatched] = useMutation(removeFromWatchedList, {
    onSuccess: () => {
      refetchQueries();
    },
  });
  const [removeFromToWatch] = useMutation(removeFromToWatchList, {
    onSuccess: () => {
      refetchQueries();
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

  React.useEffect(() => {
    if (user) {
      if (user.towatch.some((show) => show.id === selectedShow.id)) {
        setWatchlistAction('addToWatchlist');
      } else if (user.watched.some((show) => show.id === selectedShow.id)) {
        setWatchlistAction('addToWatched');
      }
    }
  }, [user, selectedShow.id]);

  async function handleToWatchClick(event) {
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
  selectedShow: PropTypes.object,
  id: PropTypes.number,
};

export default WatchlistButtonsListView;
