import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";

export const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${colors.bgSecondary};
    padding-top: 32px;
    padding-left: 16px;
    width: 240px;
    height: 100vh;
  }
`;

export const LogoImgWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    margin: auto;
    width: 50%;
    margin-bottom: 56px;
  }
`;

export const LogoImg = styled.img`
  display: none;
  @media screen and (${breakpoints.desktop}) {
    display: block;
    width: 100px;
  }
`;
