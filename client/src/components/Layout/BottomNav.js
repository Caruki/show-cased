import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 768px;
  flex: 0 0 10%;
  margin: 0;
  padding: 0;
  background-color: rgba(14, 5, 46, 0.6);
  border: 1px solid transparent;
  border-radius: 50px 50px 0px 0px;
  position: fixed;
  bottom: 0;
  @media (min-width: 700px) {
    position: relative;
    align-self: flex-end;
  }
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1 0;
  background: transparent;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 10px 0px 5px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const Label = styled.span`
  margin-top: 4px;
  font: 300 0.7rem 'Roboto', sans-sergiif;
  color: ${(props) => (props.active ? '#F79DC1' : '#AEB2F5')};
`;

const BottomNav = ({ links, activeNavItem }) => {
  return (
    <Container>
      <NavItemContainer>
        {links.map((link) => (
          <NavItem key={link.label} to={link.navLink}>
            <link.icon active={activeNavItem === link.navLink} />
            <Label active={activeNavItem === link.navLink}>{link.label}</Label>
          </NavItem>
        ))}
      </NavItemContainer>
    </Container>
  );
};

BottomNav.propTypes = {
  links: PropTypes.array,
  activeNavItem: PropTypes.string,
};

export default BottomNav;
