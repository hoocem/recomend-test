import React, { useState } from "react";
import PropTypes from "prop-types";
import ModeContext from "./mode.context";

const INITIAL_MODE = localStorage.getItem("mode") || "light";

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(INITIAL_MODE);

  const toggleMode = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
      return setMode("dark");
    }

    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      return setMode("light");
    }
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

ModeProvider.propTypes = {
  children: PropTypes.node,
};

ModeProvider.defaultProps = {
  children: null,
};

export default ModeProvider;
