import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: transparent;
  cursor: pointer;
  & > * {
    margin: 2px 0px;
  }
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

function ListItem({ poster, title, id, onClick }) {
  return (
    <ItemContainer id={id} onClick={onClick}>
      <PosterContainer>
        <img src={poster} alt={title} />
      </PosterContainer>
      <Title>{title}</Title>
    </ItemContainer>
  );
}

ListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default ListItem;
