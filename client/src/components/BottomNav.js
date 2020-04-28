import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1 0 10%;
  list-style: none;
  margin: 0;
  padding: 0;
  background: transparent;
`;

const ListItemContainer = styled(NavLink)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1 0;
  border-radius: 25px 25px 0px 0px;
  background-color: rgba(14, 5, 46, 0.6);
  cursor: pointer;
  text-decoration: none;
`;

const ListItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 15px 0px 15px 0px;
  background: transparent;
  border: none;
`;

const Label = styled.span`
  margin-top: 4px;
  font: 300 0.7rem 'Roboto', sans-sergiif;
  color: ${(props) => (props.active ? '#F79DC1' : '#AEB2F5')};
`;

const BottomNav = ({ links, activeNavItem }) => {
  console.log('active: ', activeNavItem);
  return (
    <Container>
      {links.map((link) => (
        <ListItemContainer key={link.label} to={link.navLink}>
          <ListItem active={activeNavItem === link.navLink}>
            <link.Icon active={activeNavItem === link.navLink} />
            <Label active={activeNavItem === link.navLink}>{link.label}</Label>
          </ListItem>
        </ListItemContainer>
      ))}
    </Container>
  );
};

BottomNav.propTypes = {
  links: PropTypes.array,
  activeNavItem: PropTypes.string,
  onNavItemClick: PropTypes.func,
};

export default BottomNav;
