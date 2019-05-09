import React from "react";
import styled from "styled-components";

import { Heading, Copy } from "../SharedStyles.style";

const Container = styled.div`
  margin-left: 21%;
  text-align: left;
`;

const Title = styled(Heading)`
    padding-top: 30px;
    width: 10%; }
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
            {`High speed broadband connections are what drive economies, empowering business to
              reach their full potential and bringing communities closer together. Only Fibre
              Optics can provide true broadband with the speed, capacity and security demanded
              in the 21st century.`}
          </p>
          <p>
            {`Pulse Networks provides a one stop shop for those wishing to build high speed networks
             that are scalable, future proofed and able to meet the exacting performance demanded by
             their clients. Through our association with Draka Comteq, the worlds largest manufacture
             of glass fibre, we brings to our clients the very latest in technology and
             products.`}
          </p>
        </Body>
      </Container>
    );
  }
}

export default Home;
