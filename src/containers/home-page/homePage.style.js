import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.body.bg};
  color: ${({ theme }) => theme.body.text};
  min-height: 100vh;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.heading.color};
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 1.5rem;
  h3 {
    margin: 0 10px 0 0;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: ${({ theme }) => theme.input.bg};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.input.bg};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  margin: 0;

  ::placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  ${(props) =>
    props.invalid &&
    css`
      border-color: #dc3545;

      &:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
      }
    `}
`;

export const StyledFeedback = styled.div`
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
  button {
    margin-right: 10px;
  }
`;
