import React from "react";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";
import { Col } from "../../components/grid/Grid";
import {
  InputWrapper,
  StyledInput,
  StyledFeedback,
  ActionWrapper,
} from "./homePage.style";
import Button from "../../components/button/Button";

const formValidator = ({ name, email }) => {
  const errors = {};
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 3) {
    errors.name = "Name should be at least 3 characters long";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const submit = () => {
    toast("Thank you for contacting us – we will get back to you soon!", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "submit_success",
      hideProgressBar: true,
    });
  };

  const { handleChange, handleSubmit, errors } = useForm(submit, formValidator);

  return (
    <>
      <Col>
        <InputWrapper>
          <StyledInput
            name="name"
            placeholder="Name"
            onChange={handleChange}
            invalid={!!errors.name}
          />
          {!!errors.name && <StyledFeedback>{errors.name}</StyledFeedback>}
        </InputWrapper>
      </Col>
      <Col>
        <InputWrapper>
          <StyledInput
            name="email"
            placeholder="Email"
            onChange={handleChange}
            invalid={!!errors.email}
          />
          {!!errors.email && <StyledFeedback>{errors.email}</StyledFeedback>}
        </InputWrapper>
      </Col>
      <ActionWrapper>
        <Button variant="secondary">Save</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </ActionWrapper>
    </>
  );
};

Form.propTypes = {};

export default Form;
