import Albums from "../../pages/Albums/Albums";
import {
  MenuHeader,
  MenuItem,
  MenuItemText,
  MenuItemsWrapper,
  Menu as MenuWrapper,
  TitleWrapper,
} from "./MenuStyles";
import propTypes from "prop-types";

const Menu = ({ isOpen, setOpen, isHamburger, title }) => {
  return (
    <MenuWrapper open={isOpen}>
      {isHamburger && (
        <MenuHeader>
          <TitleWrapper>title</TitleWrapper>
          {/* <CloseImg onClick={() => setOpen(false)} /> */}
        </MenuHeader>
      )}
      <MenuItemsWrapper>
        <MenuItem to={"/"}>
          <MenuItemText>Pictures</MenuItemText>
        </MenuItem>
        <MenuItem to={"/albums"}>
          <Albums />
          <MenuItemText>Albums</MenuItemText>
        </MenuItem>
      </MenuItemsWrapper>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  isOpen: propTypes.bool.isRequired,
  isHamburger: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  setOpen: propTypes.func,
};

export default Menu;
