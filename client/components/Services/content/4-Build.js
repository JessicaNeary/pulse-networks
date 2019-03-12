import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Build = () => {
  return (
    <Item>
      <Icon src="/images/services/build.svg" width="38%" />
      <Copy>
        <p>
          As Builds, the forgotten art; years ago large drafting offices
          existing purely to record and maintain accurate plant records. These
          days it's almost an after thought with the job of recording new
          installations falling to mostly untrained construction workers. The
          quality and accuracy of their work varying enormously which has lead
          to a general distrust of service plans and an increase costs in
          identifying obstructions. All installations carrying out by Pulse
          Networks are recorded by trained staff who know their chainage from
          their offsets. We provide AutoCAD records on a GIS Landbase which can
          be electronically uploaded to the clients own GIS system.
        </p>
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
