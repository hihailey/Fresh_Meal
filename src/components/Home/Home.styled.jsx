import styled from "styled-components";

export const TextWrapper = styled.div`
  h1 {
    font-size: 8vh;
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
  @media only screen and (max-height: 600px) {
    padding: 8px;
    font-size: 16px;
    width: 180px;
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
  font-size: 2.5vh;
  margin: 0 5vw;
  height: 10vh;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  background-color: rgb(237, 227, 218, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  width: 35vw;
  min-width: 500px;
  justify-content: center;
  margin: 10px;

  h1 {
    font-size: 40px;
    color: #2d6a4f;
    text-align: center;

    @media only screen and (max-height: 600px) {
      font-size: 28px;
    }
  }

  p {
    font-family: Inter;
    font-size: 14px;
    text-align: center;
    @media only screen and (max-height: 600px) {
      font-size: 12px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
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

  @media only screen and (max-height: 600px) {
    padding: 12px 10px;
    font-size: 12px;
    width: 10vw;

    ::-webkit-input-placeholder {
      font-size: 12px;
      font-family: Inter;
    }
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
