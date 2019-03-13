import styled from "styled-components";

import { Heading, Copy, linkStyles } from "../SharedStyles.style";
import posed from "react-pose";

export const Container = styled.div`
  display: flex;
`;

export const Title = styled(Heading)`
  margin: 20px 0 30px 10px;
`;

export const Main = styled(Copy)`
  width: 60%;
`;

const DocsTransition = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});

export const Docs = styled(DocsTransition)`
  display: flex;
  flex-direction: column;
  height: 260px;
  margin-top: 75px;
  justify-content: space-around;
`;

const LinkTransition = posed.a({
  enter: { x: 0, opacity: 1 },
  exit: { x: 30, opacity: 0 }
});

export const Link = styled(LinkTransition)`
  ${linkStyles}
`;
