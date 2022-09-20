import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormContainer, FormInput, InputWrapper, Error } from "./Home.styled";
import back from "../../img/back.png";
import * as Yup from "yup";

export default function FormBox({ onClickFormClose }) {
  let navigate = useNavigate();
  const emailRef = useRef("");
  const postalRef = useRef("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  //Validation for the user
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    postal: Yup.string()
      .length(5, "Zip code length must be 5 ")
      .matches(/^[0-9]{5}/)
      .required("Zip code is required"),
  });

  //Check the validation
  const onSubmit = () => {
    SignUpSchema.validate({
      email: emailRef.current.value,
      postal: postalRef.current.value,
    })
      .catch((err) => {
        //get the error msg
        setErrorMsg(err.errors);
      })
      .then((value) => {
        //if value validated
        if (value) {
          setIsFormSubmit(true);
          return new Promise(function (resolve, reject) {
            setTimeout(() => {
              navigate(`/menu`);
            }, 2000);
          });
        }
        if (value) {
          navigate(`/menu`);
        }
      });
  };

  return (
    <FormContainer>
      <div>
        <Back src={back} onClick={() => onClickFormClose()} />
      </div>
      <div>
        <h1>CHECK AVAILABILITY</h1>
        <p>
          Let's check to make sure that FRESH MEAL is available in your area.
        </p>
      </div>
      <InputWrapper>
        <FormInput
          id="email"
          ref={emailRef}
          placeholder="Enter Email"
        ></FormInput>
        <FormInput
          id="postal"
          ref={postalRef}
          placeholder="Enter Zip Code"
        ></FormInput>
        <Error>{errorMsg}</Error>
        {isFormSubmit ? (
          <CheckBtn status="submit" onClick={onSubmit}>
            We Ship To You!
          </CheckBtn>
        ) : (
          <CheckBtn onClick={onSubmit}>Check Now</CheckBtn>
        )}
        <p>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </InputWrapper>
    </FormContainer>
  );
}

const CheckBtn = styled.button`
  background-color: #2d6a4f;
  background-color: ${({ status }) => status === "submit" && "#905e48"};
  border: none;
  color: white;
  width: 240px;
  padding: 12px;
  border-radius: 20px;
  font-size: 22px;
  margin: 12px;
  cursor: pointer;
  &:hover {
    background-color: #905e48;
    transition: 0.4s;
  }
`;

const Back = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
