"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button, {
  shouldForwardProp: (props) => props !== "loading",
})(({ theme }) => ({
  "&.MuiButton-root": {
    border: `1px solid transparent`,
    textTransform: "none",
    "&.MuiButton-contained": {
      borderRadius: theme.spacing(1),
      "&.MuiButton-containedSizeLarge": {
        minWidth: "10rem",
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      },
      "&.MuiButton-containedSizeMedium": {
        minWidth: "6rem",
        padding: `${theme.spacing(2)}`,
      },
      "&.MuiButton-containedSizeSmall": {
        borderRadius: theme.spacing(0.5),
        minWidth: "5rem",
        padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
      },
    },
    "&.MuiButton-outlined": {
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: theme.spacing(1),
      "&.MuiButton-outlinedSizeLarge": {
        minWidth: "10rem",
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      },
      "&.MuiButton-outlinedSizeMedium": {
        minWidth: "6rem",
        padding: `${theme.spacing(2)}`,
      },
      "&.MuiButton-outlinedSizeSmall": {
        borderRadius: theme.spacing(0.5),
        minWidth: "5rem",
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      },
    },
  },
}));
