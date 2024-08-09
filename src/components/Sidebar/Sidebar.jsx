import React from "react";
import {
  Sidebar as SidebarWrapper,
  LogoImgWrapper,
  LogoImg,
} from "./SidebarStyles";
import SidebarLogoImg from "../../assets/images/LogoCircle.png";
import Menu from "../Menu/Menu";

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <LogoImgWrapper>
          <LogoImg src={SidebarLogoImg} alt={"Logo"} />
        </LogoImgWrapper>
        <Menu isOpen={true} isHamburger={false} title="" />
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
