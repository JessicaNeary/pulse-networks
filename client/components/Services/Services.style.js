import styled from "styled-components";
import { Link } from "react-router-dom";
import posed from "react-pose";

import { linkStyles } from "../SharedStyles.style";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubHeadingTransition = posed.a({
  enter: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
});

export const SubHeading = styled(SubHeadingTransition)`
  ${linkStyles}
  font-size: 1.6rem;
`;

const SectionsTransition = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});

export const Sections = styled(SectionsTransition)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 260px;
  min-width: 260px;
  padding-right: 15px;
  border-right: 1px solid #707070;
  margin: 75px 25px 0 0;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 450px;
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 10px;
  max-width: ${prop => prop.width || "30%"};
`;
