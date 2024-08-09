import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";
import HamburgerIcon from "../../assets/images/icon-hamburger.png";

export const Hamburger = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  outline: none;
  border: none;
  background-color: ${colors.secondary};
  padding-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  padding-top: 5px;
  content: url(${HamburgerIcon});
`;
