import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterBox } from "./utils";

const NavigationTab = () => {
  const navigate = useNavigate();
  return (
    <CenterBox sx={{ backgroundColor: "light" }}>
      <CenterBox
        onClick={() => navigate("/")}
        sx={{ backgroundColor: "light" }}
      >
        <Typography variant={"h5"} marginRight={10}>
          Home
        </Typography>
      </CenterBox>
      <CenterBox
        onClick={() => navigate("/recommendation")}
        sx={{ backgroundColor: "light" }}
      >
        <Typography variant={"h5"} marginRight={10}>
          Recommendation
        </Typography>
      </CenterBox>
      <CenterBox
        onClick={() => navigate("/mylist")}
        sx={{ backgroundColor: "light" }}
      >
        <Typography variant={"h5"} marginRight={10}>
          MyList
        </Typography>
      </CenterBox>
    </CenterBox>
  );
};

export default NavigationTab;
