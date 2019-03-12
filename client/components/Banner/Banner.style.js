import styled, { css } from "styled-components";
import posed from "react-pose";

export const Container = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const lineStyles = css`
  position: absolute;
  width: 100%;
  text-align: left;
  color: white;
  font-family: Romanesco, cursive;
  font-size: 2rem;
`;

const FirstAnimation = posed.div({
  preEnter: {
    top: "-3rem",
    left: "40px"
  },
  enter: {
    top: "27%",
    left: "80px",
    opacity: 0.9,
    transition: {
      left: { delay: 3100, duration: 4800, ease: "easeOut" },
      top: { delay: 2800, duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 300,
      duration: 1200,
      ease: "easeInOut"
    }
  }
});

const SecondAnimation = posed.div({
  preEnter: {
    bottom: "-45px",
    left: "100px"
  },
  enter: {
    bottom: "40px",
    left: "50px",
    opacity: 0.9,
    transition: {
      left: { delay: 3100, duration: 4800, ease: "easeOut" },
      bottom: { delay: 2800, duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 300,
      duration: 1200,
      ease: "easeInOut"
    }
  }
});

export const FirstLine = styled(FirstAnimation)`
  ${lineStyles}
`;

export const SecondLine = styled(SecondAnimation)`
  ${lineStyles}
`;
