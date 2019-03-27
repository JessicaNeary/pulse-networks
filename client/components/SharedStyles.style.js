import styled, { css } from "styled-components";
import posed from "react-pose";
import { ifProp } from "styled-tools";

export const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 0 calc(50vw - 458px);
  color: white;
  font-family: "Oswald", sans-serif;
  background: #30385f;
  background: -webkit-linear-gradient(#30385f, black);
  background: -o-linear-gradient(#30385f, black);
  background: -moz-linear-gradient(#30385f, black);
  background: linear-gradient(#30385f, black);
`;

export const FadeTransition = posed.div({
  enter: { opacity: 1, delay: 50 },
  exit: { opacity: 0 }
});

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
