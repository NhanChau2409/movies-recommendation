import { Typography } from "@mui/material";
import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import { CenterBox, LeftBox } from "./utils";

const NavigationTab = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <LeftBox sx={{ backgroundColor: "light" }}>
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

      {}
    </LeftBox>
  );
};

export default NavigationTab;
