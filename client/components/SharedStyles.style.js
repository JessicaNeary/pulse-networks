import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Heading = styled.h1`
  color: #f7f7f7;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
`;

export const Copy = styled.div`
  text-align: left;
  padding: 0 30px 20px ${ifProp("right", "50px", "30px")};
  font-family: Roboto Condensed, sans-serif;
  color: #cecece;
  font-size: 1.03em;
  line-height: 1.3em;
`;

export const linkStyles = css`
    color: #f4f4f4;
    text-decoration: none; }
    &:hover {
        color: #c4c2c2;
        text-decoration: underline; 
    }
`;
