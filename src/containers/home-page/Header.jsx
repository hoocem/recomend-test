import React, { useContext } from "react";
import ModeContext from "../../contexts/mode/mode.context";
import { StyledTitle } from "./homePage.style";
import Crescent from "../../components/icons/Crescent";
import { Col } from "../../components/grid/Grid";

const iconColors = {
  light: "#000",
  dark: "#FFA500",
};

const Header = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <Col>
      <StyledTitle>
        <h3>Dark Mode Challenge</h3>
        <div>
          <Crescent
            height={32}
            width={28}
            color={iconColors[mode]}
            style={{ cursor: "pointer" }}
            onClick={toggleMode}
          />
        </div>
      </StyledTitle>
    </Col>
  );
};

export default Header;
