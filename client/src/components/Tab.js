import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
  flex: 0 0 25%;
  background-color: ${(props) => (props.active ? '#AEB2F5' : '#504481')};
  border-radius: 0px 20px 20px 0px;
  margin-top: -30px;
  border: hidden;
  box-shadow: 1px 3px 6px #504481;
  color: ${(props) => (props.active ? '#1E194F' : '#AEB2F5')};
  font: 300 0.9rem 'Roboto', sans-serif;
  & > span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    text-align: center;
  }
  z-index: ${(props) => (props.active ? 1 : 0)};

  &:focus {
    outline-width: 0;
  }
`;

function Tab({ activeTab, label, onClick }) {
  function handleClick() {
    onClick(label);
  }

  return (
    <Button onClick={handleClick} active={activeTab === label}>
      <span>{label}</span>
    </Button>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tab;
