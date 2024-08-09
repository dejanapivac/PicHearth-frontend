import styled, { css } from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { NavLink } from "react-router-dom";

export const ImgStyle = css`
  margin-right: 19px;
`;

export const Menu = styled.nav`
  display: flex;
  background-color: ${colors.bgSecondary};

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export const MenuHeader = styled.header`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 28px 34px; */
`;

export const TitleWrapper = styled.span`
  /* font-size: 18px;
  font-weight: bold; */
`;

// TODO

export const MenuWrapper = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const MenuItemsWrapper = styled.div`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuItem = styled(NavLink)`
  margin-bottom: 0;
  padding: 14px 19px;
  flex: 1;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.textGrey};
  border-radius: 25px 0 0 25px;

  &::after {
    display: none;
    content: "";
    width: 9px;
    height: 9px;
    background-color: ${colors.primary};
    border-radius: 50%;
    position: absolute;
    right: 14px;
  }

  &:hover {
    font-weight: bold;

    &::after {
      display: block;
    }
  }

  &.active {
    font-weight: bold;
    color: ${colors.blue};
    background-color: none;

    &::after {
      /* display: block; */
    }
  }

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    padding: 14px 14px 9px 19px;
    transition: color 0.3s ease-out;
    margin-bottom: 10px;
    position: relative;
    text-decoration: none;
    color: ${colors.textGrey};

    &:hover {
      background-color: ${colors.blue}20;
      color: ${colors.blue};
    }

    &.active {
      background-color: ${colors.blue}20;

      &::after {
        display: block;
      }
    }
  }

  /* ${(props) =>
    props.$isLogout &&
    `
      margin-top: 196px;
    `}; */

  /* &:last-child {
    margin-bottom: 0;
  } */
`;

export const MenuItemText = styled.div`
  margin-bottom: 0;

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 5px;
  }
`;
