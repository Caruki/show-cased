import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: transparent;
`;

const PosterContainer = styled.div`
  border: hidden;
  border-radius: 30px;
  overflow: hidden;
  max-width: 95px;

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

const Rating = styled.div`
  color: #aeb2f5;
  font: 300 0.8rem 'Roboto', sans-serif;
`;

function ListItem({ poster, title, rating }) {
  return (
    <ItemContainer>
      <PosterContainer>
        <img src={poster} alt={title} />
      </PosterContainer>
      <Title>{title}</Title>
      <Rating>{rating} / 10</Rating>
    </ItemContainer>
  );
}

ListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
};

export default ListItem;
