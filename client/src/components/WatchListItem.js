import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import WatchlistButtonsListView from './WatchlistButtonsListView';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  background: transparent;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: transparent;
  cursor: pointer;
  flex-grow: 1;
  & > * {
    margin: 2px 0px;
  }
`;

const PosterContainer = styled.div`
  border: hidden;
  border-radius: 30px;
  overflow: hidden;
  max-width: 85px;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border: hidden;
    border-radius: 30px;
  }
`;

const Title = styled.div`
  color: #d05888;
  font: 400 0.8rem 'Roboto', sans-serif;
  text-align: center;
`;

const MissingPoster = styled.div`
  padding-top: 50px;
  text-align: center;
  font: 300 0.8rem 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  color: #aeb2f5;
`;

function WatchListItem({ poster, title, id, onClick, show }) {
  return (
    <Container>
      <ItemContainer id={id} onClick={onClick}>
        <PosterContainer>
          {poster === 'https://image.tmdb.org/t/p/w154null' ? (
            <MissingPoster>no image! ¯\_(ツ)_/¯</MissingPoster>
          ) : (
            <img src={poster} alt={title} />
          )}
        </PosterContainer>
        <Title>{title}</Title>
      </ItemContainer>
      <WatchlistButtonsListView id={id} size="small" selectedShow={show} />
    </Container>
  );
}

WatchListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
  show: PropTypes.object,
};

export default WatchListItem;
