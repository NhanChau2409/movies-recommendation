import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import customizeTheme from "./customizeTheme";
import NavigationTab from "./NavigationTab";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";

const App = () => {
  return (
    <ThemeProvider theme={customizeTheme}>
      <main>
        <CssBaseline />
        <NavigationTab />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
