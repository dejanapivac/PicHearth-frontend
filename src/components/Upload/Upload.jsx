import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import {
  Upload as UploadWrapper,
  UploadButton,
  UploadImg,
} from "./UploadStyles";
import propTypes from "prop-types";

const Upload = ({ open, setOpen }) => {
  //   const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <UploadWrapper>
      <UploadButton onClick={() => setOpen(!open)}>
        <UploadImg alt="Upload Icon" />
      </UploadButton>
    </UploadWrapper>
  );
};

Upload.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};

export default Upload;
