import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const ProjectManagement = () => {
  return (
    <Item>
      <Icon src="/images/services/project.svg" width="21%" />
      <Copy>
        <p>
          The key to our success is that we manage projects throughout their
          life cycle, from initial client brief right through to the As Build
          handover.{" "}
        </p>
        <p>
          At all times we know how a project is progressing, if there are any
          potential roadblocks and how we might mitigate them.
        </p>
        <p>
          We combine management skills with a first hand knowledge of design,
          construction and installation enabling quick decision making and
          approvals.
        </p>
      </Copy>
    </Item>
  );
};

export default ProjectManagement;
