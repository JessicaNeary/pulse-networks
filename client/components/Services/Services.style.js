import styled from "styled-components";
import { Link } from "react-router-dom";

import { linkStyles } from "../SharedStyles.style";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubHeading = styled(Link)`
  ${linkStyles}
  font-size: 1.6rem;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 260px;
  min-width: 260px;
  padding-right: 15px;
  border-right: 1px solid #707070;
  margin: 75px 25px 0 0;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 450px;
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 10px;
  max-width: ${prop => prop.width || "30%"};
`;
