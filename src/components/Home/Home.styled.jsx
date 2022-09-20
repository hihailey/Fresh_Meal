import styled from "styled-components";

export const TextWrapper = styled.div`
  h1 {
    font-size: 60px;
    color: #1b4332;
    text-align: center;
  }
  div:last-of-type {
    margin-top: 16px;
    font-family: Inter;
    font-size: 20px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  flex-direction: column;
  gap: 32px;
`;

export const GreenBtn = styled.button`
  background-color: #2d6a4f;
  border: none;
  color: white;
  width: 240px;
  padding: 12px;
  border-radius: 20px;
  font-size: 24px;
  margin: 12px;
  cursor: pointer;
  &:hover {
    background-color: #905e48;
    transition: 0.4s;
  }
`;

export const SlideWrapper = styled.div`
  background-color: #0b3a1c;
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 12px 0px;
  height: 12vh;
  display: flex;
`;

export const SlideContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  margin: 5vw;
`;

export const FormContainer = styled.div`
  background-color: rgb(237, 227, 218, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  gap: 30px;
  width: 35vw;
  min-width: 500px;
  justify-content: center;
  margin: 10px;

  h1 {
    font-size: 40px;
    color: #2d6a4f;
  }

  p {
    font-family: Inter;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  div:first-of-type {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 16px 20px;
  font-family: Inter;
  width: 15vw;
  min-width: 300px;

  ::-webkit-input-placeholder {
    font-size: 14px;
    font-family: Inter;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  gap: 20px;

  p {
    color: grey;
    font-size: 10px;
  }
`;

export const Error = styled.div`
  color: #ea6a12;
  font-family: Inter;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
