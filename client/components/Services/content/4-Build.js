import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Build = () => {
  return (
    <Item>
      <Icon src="/images/services/products.svg" width="21%" />
      <Copy>
        <p>Replace me with products copy</p>
        <p>
          GPS As Builds are provided for larger projects or upon request but for
          the most part we rely on good old fashion kerb and boundary offsets
          which can easily be read by the non GPS equipped contractor.
        </p>
        <p>
          Pulse Networks provides a full drafting service from field recording
          thru to CAD drafting. We can convert manual drawings or recordings to
          CAD and carry out retrospective as building using tracer wire and
          cable locators.
        </p>
      </Copy>
    </Item>
  );
};

export default Build;
