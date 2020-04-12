import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ListsIcon from '../assets/lists-icon.svg';
import ListsIconClicked from '../assets/lists-clicked-icon.svg';
import PopularIcon from '../assets/popular-icon.svg';
import PopularIconClicked from '../assets/popular-clicked-icon.svg';
import RecsIcon from '../assets/recs-icon.svg';
import RecsIconClicked from '../assets/recs-clicked-icon.svg';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0px 0px;
  background-color: rgba(14, 5, 46, 0.6);
`;

const Button = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0px 25px 0px 25px;
  padding: 15px 0px 15px 0px;
  background: transparent;
  border: none;
  outline: hidden;
  color: ${({ variation, site }) => {
    if (variation === site) {
      return '#F79DC1';
    }
    return '#AEB2F5';
  }};
`;

function BottomNav({ site }) {
  return (
    <NavContainer>
      <ButtonContainer>
        <Button site={site} variation="popular">
          {site === 'popular' ? (
            <img
              src={PopularIconClicked}
              alt="icon with three stars in pink color"
            />
          ) : (
            <img src={PopularIcon} alt="icon with three stars in blue color" />
          )}
          Popular
        </Button>
        <Button site={site} variation="recs">
          {site === 'recs' ? (
            <img
              src={RecsIconClicked}
              alt="icon with a clapperboard and the play symbol in pink color"
            />
          ) : (
            <img
              src={RecsIcon}
              alt="icon with a clapperboard and the play symbol in blue color"
            />
          )}
          Recs
        </Button>
        <Button site={site} variation="lists">
          {site === 'lists' ? (
            <img
              src={ListsIconClicked}
              alt="icon with a list and a star inside in pink color"
            />
          ) : (
            <img
              src={ListsIcon}
              alt="icon with a list and a star inside in pink color"
            />
          )}
          Your Lists
        </Button>
      </ButtonContainer>
    </NavContainer>
  );
}

BottomNav.propTypes = {
  site: PropTypes.string,
};

export default BottomNav;
