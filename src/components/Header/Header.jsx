import React, { useState, useEffect } from "react";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoImg,
  HeaderIcons,
} from "./HeaderStyles";
import { HeaderNav } from "./HeaderStyles";
import LogoPng from "../../assets/images/logoName.png";
import Upload from "../Upload/Upload";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <LogoImg src={LogoPng} alt="Logo img" />
          <HeaderIcons>
            <Upload open={open} setOpen={setOpen} />
          </HeaderIcons>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
