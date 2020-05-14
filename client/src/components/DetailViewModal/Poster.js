import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PosterContainer = styled.div`
  flex: 0 0 150px;
  @media (min-width: 700px) {
    flex: 1 0 150px;
  }
  border: hidden;
  border-radius: 0px 0px 80px 80px;
  background: transparent;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border: hidden;
    border-radius: 0px 0px 80px 80px;
  }
`;

const MissingPoster = styled.div`
  padding-top: 50px;
  text-align: center;
  font: 300 0.8rem 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  color: #aeb2f5;
`;

function Poster({ showPoster }) {
  return (
    <PosterContainer>
      {showPoster === 'https://image.tmdb.org/t/p/w780null' ? (
        <MissingPoster>no image available! ¯\_(ツ)_/¯</MissingPoster>
      ) : (
        <img src={showPoster} alt="poster of the selected tv show" />
      )}
    </PosterContainer>
  );
}

Poster.propTypes = {
  showPoster: PropTypes.string,
};

export default Poster;
