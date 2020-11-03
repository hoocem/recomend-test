import styled, { css } from "styled-components";

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

const getMediaQuery = () => {
  return Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = (...args) => css`
      @media (min-width: ${breakpoints[breakpoint]}px) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {});
};

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  flex: 1 0 auto;
  max-width: 100%;

  //flex: 1 1 50%;
  //max-width: 50%;

  ${(props) => css`
    ${Object.keys(breakpoints).map(
      (breakpoint) =>
        getMediaQuery()[breakpoint]`
          ${
            props[breakpoint] &&
            `
            flex: 1 1 ${(props[breakpoint] / 12) * 100}%;
            max-width: ${(props[breakpoint] / 12) * 100}%;
            `
          }
        `
    )}
  `}
`;
