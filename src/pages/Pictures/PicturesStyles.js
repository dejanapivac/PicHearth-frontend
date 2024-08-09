import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";

export const PicturesWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-width: 1120px;
  align-items: first baseline;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 22px 20px;
    place-items: start;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0px 0px;
  }
`;
