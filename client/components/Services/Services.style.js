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

const BeamTransition = posed.div({
  show: { opacity: 1, duration: 100 },
  hide: { opacity: 0, duration: 100 }
});

export const BodyTransition = posed.div({
  center: { x: "0", transition: { ease: "easeOut", duration: 300 } },
  right: {
    x: "150%",
    opacity: 0,
    transition: { ease: "easeOut", duration: 300 }
  },
  left: { x: "-100%" }
});

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileHeading = styled(Heading)`
  font-size: 4rem;
  margin: 0 0 0 calc(-100vw + 230px);
`;

export const Title = styled(Heading)`
  margin: 0 0 0 -80px;
  padding-bottom: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0;
    position: relative;
    top: -40px;
    text-shadow: 0px 3px 5px #000;
    margin: 0 0 -15px;
    font-weight: 300;
    z-index: 99;
  }
`;

export const LinkWrapper = styled(LinkTransition)`
  position: relative;
`;

export const SubHeading = styled.div`
  ${linkStyles}
  cursor: pointer;
  padding: 2px 15px 5px 0;
  font-size: 1.6rem;
`;

export const Content = styled.div`
  overflow: hidden;
  padding-left: 25px;
  min-height: 510px;
`;

export const Beam = styled(BeamTransition)`
  content: "";
  background-color: white;
  position: absolute;
  box-shadow: 0 0 4px 2px;
  height: 32px;
  width: 1px;
  top: 2px;
  right: -1px;
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
  margin: 90px 0 0 0;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
    margin-bottom: 80px;
  }
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 20px;
  min-width: 125px;
  width: 125px;
`;
