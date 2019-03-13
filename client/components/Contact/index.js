import React from "react";
import styled from "styled-components";

import { Heading, linkStyles } from "../SharedStyles.style";
import posed from "react-pose";

const Container = styled.div`
  padding: 45px 0px 5px 0px;
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.3em;
  color: #c4c2c2;
`;

const SubHeadingTransition = posed.p({
  enter: { delay: 50, opacity: 1 },
  exit: { opacity: 0 }
});

const SubHeading = styled(SubHeadingTransition)`
  padding: 50px 0px 15px 0px;
  font-size: 1.7em;
`;

const Info = posed.ul({
  enter: { delay: 100, staggerChildren: 50 }
});

const LineTransition = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
});

const Line = styled(LineTransition)`
  padding-top: 10px;
  font-size: 1.1em;
  margin-right: 40px;
  list-style: none;
`;

const Link = styled.a`
  ${linkStyles}
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact</Heading>
      <div>
        <SubHeading>Pulse Networks Limited</SubHeading>
        <Info>
          <Line>PO Box 178, Orewa 0946</Line>
          <Line>Unit C, 15 Douglas Alexander Parade, Albany</Line>
          <Line>Phone - 64 09 974 4350</Line>
          <Link href="mailto:info@pulse.co.nz">
            <Line>info@pulse.co.nz</Line>
          </Link>
        </Info>
      </div>
    </Container>
  );
};

export default Contact;
