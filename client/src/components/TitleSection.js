import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import TrailerIcon from '../assets/trailer-icon.svg';
import RatingIcon from '../assets/rating-icon.svg';

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0;
  align-items: center;
  justify-content: space-around;
  margin: 5px 10px;

  & :focus-within {
    outline-width: 0;
    border: 1px solid #aeb2f5;
    border-radius: 8px;
  }
`;

const Rating = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  font: 500 0.7rem 'Roboto', sans-serif;
  color: #e7eaff;
  flex: 0 0 75px;

  & > * {
    margin: 0px 5px 0px 0px;
  }
`;

const ShowTitle = styled.h2`
  font: 500 1.5rem 'Roboto', sans-serif;
  color: #c5c8f8;
  text-shadow: 2px 2px 7px #d05888d1;
  flex: 1 0 50%;
  text-align: center;
  margin: 0;
`;

const TrailerButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: fit-content;
  width: fit-content;
  flex: 0 0 75px;
  background: transparent;
  border: none;
  font: 300 0.5rem 'Roboto', sans-serif;
  color: #e7eaff;
  cursor: pointer;

  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  & :active {
    font-style: italic;
  }
`;

function TitleSection({ showRating, showTitle, showTrailer }) {
  function handleOnClick(showTrailer) {
    window.open(showTrailer);
  }

  return (
    <TitleContainer>
      <Rating>
        <img src={RatingIcon} alt="star icon to represent rating" />
        {`${showRating} %`}
      </Rating>
      <ShowTitle>{showTitle}</ShowTitle>
      <TrailerButton onClick={() => handleOnClick(showTrailer)}>
        <img src={TrailerIcon} alt="a play icon to represent a video" />
        Watch the Trailer
      </TrailerButton>
    </TitleContainer>
  );
}

TitleSection.propTypes = {
  showRating: PropTypes.number,
  showTitle: PropTypes.string,
  showTrailer: PropTypes.string,
};

export default TitleSection;
