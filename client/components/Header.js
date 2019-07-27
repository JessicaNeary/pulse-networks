import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { linkStyles } from "./SharedStyles.style";

const Nav = styled.ul`
  margin-right: 5%;
  list-style-type: none;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  & li {
    width: 60px;
    text-align: center;
    position: relative;
  }
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Beam = styled.div`
  content: "";
  background-color: white;
  position: absolute;
  opacity: 0;
  box-shadow: 0 0 4px 2px;
  height: 1px;
  width: 60px;
  top: 34px;
  transition: opacity 0.15s;
  z-index: 999;
`;

const Item = styled(NavLink)`
  ${linkStyles}
  &:hover {
    text-decoration: none;
    color: #f4f4f4;
  }
  &:hover + div {
    opacity: 1;
  }
`;

const Header = () => {
  return (
    <div>
      <Nav>
        <li>
          <Item exact className="tab" to="/">
            Home
          </Item>
          <Beam />
        </li>
        <li>
          <Item className="tab" to="/services">
            Services
          </Item>
          <Beam />
        </li>
        <li>
          <Item className="tab" to="/projects">
            Projects
          </Item>
          <Beam />
        </li>
        <li>
          <Item className="tab" to="/contact">
            Contact
          </Item>
          <Beam />
        </li>
      </Nav>
    </div>
  );
};

export default Header;
