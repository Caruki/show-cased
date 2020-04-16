import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  flex: 0 1 30px;
  margin: 10px 10px;
`;

const GenreField = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: hidden;
  text-align: center;
  border-radius: 11px;
  background-color: #504481;
  box-shadow: 0px 3px 6px #1e194f;
  font: 300 italic 0.7rem 'Roboto', sans-serif;
  letter-spacing: 2px;
  color: #e7eaff;
  flex: 1 1;
  margin: 0px 5px;
  cursor: default;
`;

function GenreList({ genres }) {
  return (
    <Container>
      {genres.map((genre) => (
        <GenreField key={genre}>{genre}</GenreField>
      ))}
    </Container>
  );
}

GenreList.propTypes = {
  genres: PropTypes.array,
};

export default GenreList;
