import styled from "styled-components";

import { Heading, Copy, linkStyles } from "../SharedStyles.style";

export const Container = styled.div`
  display: flex;
`;

export const Title = styled(Heading)`
  margin: 20px 0 30px 10px;
`;

export const Main = styled(Copy)`
  width: 60%;
`;

export const Docs = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  margin-top: 75px;
  justify-content: space-around;
`;

export const Link = styled.a`
  ${linkStyles}
`;
