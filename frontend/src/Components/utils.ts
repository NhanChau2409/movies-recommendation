import { Box, Stack, styled, Typography } from "@mui/material";

export const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const LeftBox = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
}));

export const RowContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  spacing: 8,
}));

export const ColumnContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  spacing: 8,
}));
