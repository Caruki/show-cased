import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const AllActorsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: flex-start;
  margin: 10px 10px;
  word-break: break-word;
  flex: 1 1;
  width: auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const ActorContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #aeb2f5;
  flex: 0 0 24%;
  height: auto;
  word-break: break-word;
  margin: 0px 2.5px;
`;

const ActorImageWrapper = styled.div`
  border: hidden;
  border-radius: 13px;
  box-shadow: 0px 0px 6px #1e194f;
  overflow: hidden;
  min-width: 30px;
  min-height: 80px;
  flex: 1 1;
  margin: 5px;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border: hidden;
    border-radius: 13px;
    margin-bottom: -3px;
  }
`;

function ActorList({ actors }) {
  return (
    <AllActorsContainer>
      {actors.map((actor) => (
        <ActorContainer key={actor.name}>
          <ActorImageWrapper>
            <img src={actor.image} alt={`picture of ${actor.name}`} />
          </ActorImageWrapper>
          {actor.name}
        </ActorContainer>
      ))}
    </AllActorsContainer>
  );
}

ActorList.propTypes = {
  actors: PropTypes.array,
};

export default ActorList;
