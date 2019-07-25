import React from "react";

import Planning from "./content/1-Planning";
import Construction from "./content/2-Construction";
import Installation from "./content/3-Installation";
import Products from "./content/4-Products";
import ProjectManagement from "./content/5-ProjectManagement";
import { MobileHeading } from "./Services.style";
import Main from "./Main.js";

const MobileServices = () => (
  <div>
    <MobileHeading>Services</MobileHeading>
    <Main mobile />
    <Products mobile />
    <Planning mobile />
    <Construction mobile />
    <Installation mobile />
    <ProjectManagement mobile />
  </div>
);

export default MobileServices;
