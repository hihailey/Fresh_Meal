import styled from "styled-components";

export const Banner = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("//cdn.shopify.com/s/files/1/0506/2600/3116/files/LPH.8_1.png?v=1658433247");
  color: white;
  text-align: center;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 24px;
  flex-direction: column;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  h1 {
    font-size: 52px;
  }
  p {
    font-family: Inter;
    font-weight: 500;
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
`;

export const SlideWrapper = styled.div`
  background-color: #0b3a1c;
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 12px 0px;
  height: 13vh;
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
  gap: 40px;
  width: 35vw;
  min-width: 500px;
  justify-content: center;
  height: 48vh;

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
    gap: 20px;
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
    color: #ea6a12;
  }
`;

export const MenuWrapper = styled.div`
  padding: 40px 60px;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  height: fit-content;
`;

export const CartContainer = styled.div`
  background: rgb(255, 255, 255, 0.6);
  position: sticky;
  top: 0;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  height: fit-content;
  min-height: 35vh;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  padding: 4px 0px 24px 0px;
  border-bottom: 1px solid #e3e1e1;
  width: 100%;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter;
  margin: 20px;
  gap: 10px;
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  p {
    text-align: center;
    max-width: 250px;
    color: #959fa8;
  }

  &:hover img {
    transform: rotate(360deg);
  }
  img {
    width: 120px;
    transition: transform 0.7s ease-in-out;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
