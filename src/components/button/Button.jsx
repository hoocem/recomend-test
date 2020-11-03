import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button((props) =>
  css({
    cursor: "pointer",
    padding: ".5rem 1rem",
    lineHeight: "1.5",
    borderRadius: ".3rem",
    display: "inline-block",
    fontWeight: "400",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    userSelect: "none",
    border: "1px solid transparent",
    overflow: "visible",
    margin: 0,
    fontFamily: '"Nunito", sans-serif',
    minWidth: "100px",
    minHeight: "40px",
    ...(props.variant === "primary" && {
      color: props.theme.button.color,
      backgroundColor: props.theme.button.primary.bg,
      borderColor: props.theme.button.primary.bg,
    }),
    ...(props.variant === "secondary" && {
      color: props.theme.button.color,
      backgroundColor: props.theme.button.secondary.bg,
      borderColor: props.theme.button.secondary.bg,
    }),
  })
);

const Button = ({ variant, children, ...restProps }) => {
  return (
    <StyledButton variant={variant} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "primary",
  children: null,
};

export default Button;
