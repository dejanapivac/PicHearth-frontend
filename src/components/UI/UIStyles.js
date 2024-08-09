import { breakpoints } from "../../utils/styles/theme";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
`;

export const RightSideWrapper = styled.div`
  width: 100%;

  @media screen and (${breakpoints.desktop}) {
    width: calc(100% - 240px);
    margin-left: 240px;
  }
`;
