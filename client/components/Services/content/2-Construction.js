import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Construction = () => {
  return (
    <Item>
      <Icon src="/images/services/construct.svg" />
      <Copy>
        <p>
          Pulse Networks has worked with a number of civil engineering companies
          through out NZ to build outside plant networks. This work includes
          trenching, directional drilling, manhole installation and building
          entries.
        </p>
        <p>
          We were one of the first to bring cable jetting technology into NZ,
          and have installed microduct and cable throughout the country.
        </p>
        <p>
          Pulse Networks has provided consultancy to local councils and sat on
          national advisory groups, providing input into construction issues and
          solutions. All this experience is available to our clients.
        </p>
        <p>
          We work hard to develop methodologies that produce the very best
          outcomes for our clients.
        </p>
      </Copy>
    </Item>
  );
};

export default Construction;
