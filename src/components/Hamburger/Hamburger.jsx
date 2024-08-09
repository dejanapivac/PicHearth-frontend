import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import {
  Hamburger as HamburgerWrapper,
  HamburgerButton,
  HamburgerImg,
} from "./HamburgerStyles";
import propTypes from "prop-types";
import Menu from "../Menu/Menu";

const Hamburger = ({ open, setOpen }) => {
  //   const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <HamburgerWrapper>
      <HamburgerButton onClick={() => setOpen(!open)}>
        <HamburgerImg />
      </HamburgerButton>
      <Menu isOpen={open} setOpen={setOpen} isHamburger={true} title="Menu" />
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};

export default Hamburger;
