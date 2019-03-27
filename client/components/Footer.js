import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  border-top: 1px solid #c4c2c2;
  padding: 0px 5px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em; }
  @media (max-width: 460px) {
      padding: 0px 10px;
      font-size: 0.7em; }

`;

const Footer = () => {
  return (
    <Container>
      <p>Copyright © 2010. Pulse Networks.</p>
      <p>
        Website created by
        <a className="link" href="https://github.com/JessicaNeary">
          {" "}
          Jessica Neary
        </a>
      </p>
    </Container>
  );
};

export default Footer;
