import React from "react";
import styled from "styled-components";

import { Heading, Copy } from "../SharedStyles.style";

const Container = styled.div`
  margin-left: 21%;
  text-align: left;
`;

const Title = styled(Heading)`
  padding-top: 30px;
  width: 10%;
`;

const Body = styled(Copy)`
  padding: 0;
  margin-left: -17px;
  width: 80%;
`;

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>Pulse Networks</Title>
        <Body>
          <p>
            High speed broadband connections are what drive economies,
            empowering businesses to reach their full potential and bringing
            communities closer together. Only Fibre Optics can provide true
            broadband with the speed, capacity and security demanded in the 21st
            century.
          </p>
          <p>
            Pulse Networks provides a one stop shop for those wishing to build
            high speed networks and those wanting to connect to them. The
            results are scalable, future proofed installations able to meet the
            exacting performance demanded by their customers.
          </p>
          <p>
            Through our association with world leading suppliers and
            manufacturers, we are able to source the very latest in technology
            and products.
          </p>
        </Body>
      </Container>
    );
  }
}

export default Home;
