import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ListsIcon from '../assets/lists-icon.svg';
import ListsIconClicked from '../assets/lists-clicked-icon.svg';
import PopularIcon from '../assets/popular-icon.svg';
import PopularIconClicked from '../assets/popular-clicked-icon.svg';
import RecsIcon from '../assets/recs-icon.svg';
import RecsIconClicked from '../assets/recs-clicked-icon.svg';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  border-radius: 25px 25px 0px 0px;
  background-color: rgba(14, 5, 46, 0.6);
`;

const Button = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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

function Footer({ site }) {
  return (
    <FooterContainer>
      <ButtonContainer>
        <Button site={site} variation="popular">
          {site === 'popular' ? (
            <img src={PopularIconClicked} alt="popular-icon" />
          ) : (
            <img src={PopularIcon} alt="popular-icon" />
          )}
          Popular
        </Button>
        <Button site={site} variation="recs">
          {site === 'recs' ? (
            <img src={RecsIconClicked} alt="recs-icon" />
          ) : (
            <img src={RecsIcon} alt="recs-icon" />
          )}
          Recs
        </Button>
        <Button site={site} variation="lists">
          {site === 'lists' ? (
            <img src={ListsIconClicked} alt="lists-icon" />
          ) : (
            <img src={ListsIcon} alt="lists-icon" />
          )}
          Your Lists
        </Button>
      </ButtonContainer>
    </FooterContainer>
  );
}

Footer.propTypes = {
  site: PropTypes.string,
};

export default Footer;
