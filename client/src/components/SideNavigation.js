import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex: 0 0 10%;
  z-index: 10;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  height: 50%;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  height: fit-content;
  color: ${(props) => (props.clicked ? '#1E194F' : '#AEB2F5')};
  font: 300 0.9rem 'Roboto', sans-serif;
  transform: rotate(-90deg);
  transform-origin: bottom right;
`;

const Button = styled.button`
  height: 50%;
  width: 100%;
  background-color: ${(props) => (props.clicked ? '#AEB2F5' : '#504481')};
  border-radius: 0px 20px 20px 0px;
  border: hidden;
  padding: 30px 5px 5px 25px;
  box-shadow: 1px 3px 6px #504481;
  margin-bottom: -35px;
  z-index: ${(props) => (props.clicked ? 1 : 0)};

  &:focus {
    outline-width: 0;
  }
`;

function SideNavigation({ clicked, site }) {
  return (
    <Container>
      <ButtonContainer>
        <Button>
          <TextContainer>
            {site === 'popular' ? 'Newest' : 'ToWatch'}
          </TextContainer>
        </Button>
        <Button clicked={clicked}>
          <TextContainer clicked={clicked}>
            {site === 'popular' ? 'Trending' : 'Watched'}
          </TextContainer>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

SideNavigation.propTypes = {
  clicked: PropTypes.bool,
  site: PropTypes.string,
};

export default SideNavigation;
