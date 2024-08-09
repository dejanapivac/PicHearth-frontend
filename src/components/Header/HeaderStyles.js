import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
// import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import HamburgerImg from "../../assets/images/icon-hamburger.png";
import LogoText from "../../assets/images/logoName.png";
import LogoCircle from "../../assets/images/logo.png";

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.04);
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media screen and (${breakpoints.desktop}) {
    height: 60px;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  float: right;
  /* align-items: end; */
`;

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const LogoImg = styled.img`
  display: block;
  height: 60px;
  content: url(${LogoCircle});

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;
