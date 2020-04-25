import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ArrowIcon from '../assets/arrow-icon.svg';

const AllActorsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: flex-start;
  margin: 10px;
  word-break: break-word;
  position: relative;
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

const GoOn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: fit-content;
  bottom: 30%;
  right: -10px;
  z-index: 2;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.scrolled ? 0 : 0.8)};
`;

function ActorList({ actors }) {
  const targetRef = useRef();

  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const target = targetRef.current;
    const maxWidth =
      target.getBoundingClientRect().right - target.offsetLeft - 100;
    function handleScroll() {
      if (target.scrollLeft >= maxWidth) {
        setScrolled(true);
      }
    }

    target.addEventListener('scroll', handleScroll);

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AllActorsContainer ref={targetRef}>
        {actors.map((actor) => (
          <ActorContainer key={actor.name}>
            <ActorImageWrapper>
              <img src={actor.picture} alt={`picture of ${actor.name}`} />
            </ActorImageWrapper>
            {actor.name}
          </ActorContainer>
        ))}
      </AllActorsContainer>
      {actors[4] && (
        <GoOn scrolled={scrolled}>
          <img src={ArrowIcon} alt="arrow icon pointing right" />
        </GoOn>
      )}
    </>
  );
}

ActorList.propTypes = {
  actors: PropTypes.array,
};

export default ActorList;
