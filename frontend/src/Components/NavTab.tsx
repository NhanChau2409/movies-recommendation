import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterBox, LeftBox } from "./utils";

const NavTab = (props: React.PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <LeftBox sx={{ backgroundColor: "light" }}>
      {React.Children.map(props.children, (child: any) => (
        <CenterBox
          onClick={() => navigate(`/${child?.props.children}`)}
          sx={{ backgroundColor: "light" }}
        >
          <Typography variant={"h5"} marginRight={10}>
            {child}
          </Typography>
        </CenterBox>
      ))}
    </LeftBox>
  );
};

export default NavTab;
