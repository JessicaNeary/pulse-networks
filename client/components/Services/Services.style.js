import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import { Heading, linkStyles } from "../SharedStyles.style";

const LinkTransition = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
});

const SectionsTransition = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});

export const BodyTransition = posed.div({
  center: { x: "0", transition: { ease: "easeOut", duration: 400 } },
  right: { x: "150%", transition: { ease: "easeOut", duration: 400 } },
  left: { x: "-100%" }
});

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Heading)`
  margin: 0 0 0 -40px;
`;

export const LinkWrapper = styled(LinkTransition)`
  position: relative;
`;

export const SubHeading = styled.div`
  ${linkStyles}
  cursor: pointer;
  padding: 2px 15px 5px 0;
  font-size: 1.6rem;
  &:active + div {
    opacity: 1;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  padding-left: 25px;
  min-height: 510px;
`;

export const Beam = styled.div`
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

export const Sections = styled(SectionsTransition)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 260px;
  min-width: 260px;
  border-right: 1px solid #707070;
  margin: 75px 0 0 0;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 10px;
  max-width: ${prop => prop.width || "30%"};
`;
