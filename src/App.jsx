import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import ModeContext from "./contexts/mode/mode.context";
import HomePage from "./containers/home-page/HomePage";
import themes from "./themes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <ThemeProvider theme={themes[mode]}>
      <HomePage />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
