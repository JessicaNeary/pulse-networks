import React from "react";
import styled from "styled-components";

import { linkStyles } from "./SharedStyles.style";

const Container = styled.div`
  margin-top: 40px;
  border-top: 1px solid #c4c2c2;
  padding: 0px 5px;
  display: flex;
  justify-content: flex-end;
  font-size: 0.8em; }
  @media (max-width: 460px) {
      padding: 0px 10px;
      font-size: 0.7em; }
`;

const Link = styled.a`
  ${linkStyles}
`;

const Footer = () => {
  return (
    <Container>
      <p>
        Website created by
        <Link href="https://github.com/JessicaNeary"> Jessica Neary</Link>
      </p>
    </Container>
  );
};

export default Footer;
