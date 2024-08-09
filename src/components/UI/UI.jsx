import { LayoutWrapper, RightSideWrapper } from "./UIStyles";

import Header from "../Header/Header";
import Main from "../Main/Main";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const UI = () => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <RightSideWrapper>
        <Header />
        <Main>
          <Outlet></Outlet>
        </Main>
      </RightSideWrapper>
    </LayoutWrapper>
  );
};

export default UI;
