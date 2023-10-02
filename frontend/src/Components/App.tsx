import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import NavTab from "./NavTab";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Search from "./Search";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <NavTab>
          <p>search</p>
          <p>recommendation</p>
        </NavTab>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
