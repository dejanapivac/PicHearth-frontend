import { breakpoints, colors } from "../../utils/styles/theme";

import styled from "styled-components";

export const Main = styled.main`
  padding: 24px;
  width: 100%;
  min-height: calc(100% - 60px);
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 60px;
  padding: 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 40px 72px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 40px;
  }
`;
