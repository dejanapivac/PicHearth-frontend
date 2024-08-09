import { Main as MainWrapper } from "./MainStyles";
import PropTypes from "prop-types";
import React from "react";

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
