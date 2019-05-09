import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Products = () => {
  return (
    <Item>
      <Icon src="/images/services/products.svg" width="21%" />
      <Copy>
        <p>
          Pulse Networks sources products locally and internationally, and has a
          long associate with the leading industry suppliers and manufacturers.
        </p>
        <p>
          We can provide advice and recommendations based on many years in the
          business, supporting large and small clients.
        </p>
        <p>
          By keeping abreast of the latest trends and developments, we can
          provide advice and product selection to meet the client's needs now
          and into the future.
        </p>
      </Copy>
    </Item>
  );
};

export default Products;
