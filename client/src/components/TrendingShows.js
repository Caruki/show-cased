import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import ListItem from './ListItem';
import { getTrendingShows } from '../api/shows';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

function TrendingShows() {
  const { status, data: trendingShowsList, error } = useQuery(
    'trendingShows',
    getTrendingShows
  );

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ListContainer>
      {trendingShowsList.map((show) => (
        <ListItem
          poster={show.poster}
          title={show.title}
          rating={show.rating}
          key={show.id}
        />
      ))}
    </ListContainer>
  );
}

export default TrendingShows;
