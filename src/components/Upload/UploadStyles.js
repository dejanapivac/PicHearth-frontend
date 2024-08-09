import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";
import UploadIcon from "../../assets/images/icon-upload.png";

export const Upload = styled.div`
  display: block;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  @media screen and (${breakpoints.desktop}) {
    justify-content: flex-end;
  }
`;

export const UploadButton = styled.button`
  outline: none;
  border: none;
  background-color: ${colors.bgSecondary};
  /* padding-right: 20px; */

  &:hover {
    cursor: pointer;
  }

  @media screen and (${breakpoints.desktop}) {
    padding-right: 20px;
  }
`;

export const UploadImg = styled.img`
  display: block;
  height: 26px;
  padding-top: 5px;
  content: url(${UploadIcon});
`;
