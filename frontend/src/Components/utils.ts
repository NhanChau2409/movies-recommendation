import { Box, styled, Typography } from "@mui/material";

export const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const LeftBox = styled(CenterBox)(({ theme }) => ({
  ml: theme.spacing(2),
  mr: theme.spacing(2),
  alignItems: "flex-start",
}));

export const Header = styled(Typography)(({ theme }) => ({
  ml: theme.spacing(2),
  mr: theme.spacing(2),
}));
