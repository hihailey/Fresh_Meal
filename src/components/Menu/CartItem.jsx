import React from "react";
import styled from "styled-components";
import DeleteSvg from "../icons/DeleteSvg";
import { useAtom } from "jotai";
import { cartItemAtom } from "../../atom/menu";
import { motion } from "framer-motion";

export default function CartItem(item) {
  const [cartItem, setCartItem] = useAtom(cartItemAtom);

  //remove item using item id
  const onClickRemoveAllItem = (id) => {
    //set cart item
    const newItems = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: 0 } : item
    );
    setCartItem(newItems);
  };

  //add item to the global state cart
  const onClickAddItem = (id) => {
    //set cart item
    setCartItem((cartItem) => {
      //check there is a duplicated item
      if (cartItem.find((x) => x.id === id) == null) {
        return [...cartItem, { ...item, quantity: 1 }];
      } else {
        return cartItem.map((x) => {
          if (x.id === id) {
            return { ...x, quantity: x.quantity + 1 };
          } else {
            return x;
          }
        });
      }
    });
  };

  //add item to the global state cart
  const onClickRemoveItem = (id) => {
    //set cart item
    setCartItem((cartItem) => {
      //check there is a duplicated item
      return cartItem.map((x) => {
        if (x.id === id) {
          return { ...x, quantity: x.quantity - 1 };
        } else {
          return x;
        }
      });
    });
  };

  return (
    <>
      {item.data.quantity !== 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ItemContainer>
            <img alt={item.data.title} src={item.data.image?.src} />

            <FlexBox>
              <div>
                <h1>{item.data.title}</h1>
                <div
                  onClick={() => {
                    onClickRemoveAllItem(item.data.id);
                  }}
                >
                  <DeleteSvg />
                </div>
              </div>
              <CountWrapper>
                <CartBtn>
                  <MinusBtn onClick={() => onClickRemoveItem(item.data.id)}>
                    −
                  </MinusBtn>
                  <p>{item.data.quantity}</p>
                  <PlusBtn onClick={() => onClickAddItem(item.data.id)}>
                    +
                  </PlusBtn>
                </CartBtn>
                <p>= ${item.data.variants?.[0].price * item.data.quantity}</p>
              </CountWrapper>
            </FlexBox>
          </ItemContainer>
        </motion.div>
      )}
    </>
  );
}

const ItemContainer = styled.div`
  margin: 10px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-content: center;
  min-width: 50px;
  align-items: center;
  background-color: #e4f0eb;
  padding: 0px 25px 0px 0px;
  width: -webkit-fill-available;
  gap: 10px;
  img {
    width: 100px;
  }
  h1 {
    font-size: 14px;
    width: 10vw;
  }

  p {
    color: black;
    font-family: inter;
    min-width: max-content;
    font-size: 14px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin: 4px 0px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  div div {
    cursor: pointer;
  }
`;

const CartBtn = styled.div`
  background-color: white;
  border: none;
  min-width: 100px;
  padding: 8px 4px;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Inter;
`;

const PlusBtn = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const MinusBtn = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  margin: 0;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
