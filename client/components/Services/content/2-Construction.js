import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Construction = () => {
  return (
    <Item>
      <Icon src="/images/services/construct.svg" />
      <Copy>
        <p>
          Pulse Networks provides a full civils construction service for
          building your outside plant network; this includes trenching,
          directional drilling, manholes, building entries and cable and
          microduct installation. All work is carried out to local authority
          code of practice and in compliance with the Health and Safety and
          Environment Act 2002.
        </p>
        <p>
          Pulse Networks has lay ducts along side motorways, railways, in the
          road, under the footpath and in challenging environments with many
          stake holders. With less utility space being available more
          pre-construction planning is required to avoid disruption to other
          services and costly delays. We work hard to develop methodologies that
          produce the very best outcomes for our clients.
        </p>
        <p>
          Pulse Networks has provide consultancy to local councils and sat on
          national advisory groups providing input into construction issues and
          solutions. All this experience is available to our clients.
        </p>
      </Copy>
    </Item>
  );
};

export default Construction;
