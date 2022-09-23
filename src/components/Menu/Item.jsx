import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { cartItemAtom } from "../../atom/menu";
import { motion } from "framer-motion";

export default function Item({ data }) {
  const [item, setItem] = useState({});
  //call the global state
  const [, setCartItem] = useAtom(cartItemAtom);

  useEffect(() => {
    setItem(data);
  }, [data]);

  //add item to the global state cart
  const onClickAddItem = () => {
    //set item with current quantity to display
    setItem({ ...data, quantity: item.quantity + 1 });
    //set cart item
    setCartItem((cartItem) => {
      //check there is a duplicated item
      if (cartItem.find((x) => x.id === item.id) == null) {
        return [...cartItem, { ...item, quantity: 1 }];
      } else {
        return cartItem.map((x) => {
          if (x.id === item.id) {
            return { ...x, quantity: x.quantity + 1 };
          } else {
            return x;
          }
        });
      }
    });
  };

  const onClickRemoveItem = () => {
    setItem({ ...data, quantity: item.quantity - 1 });
    setCartItem((cartItem) => {
      if (cartItem.find((x) => x.id === item.id) == null) {
        return [...cartItem, { ...item, quantity: 1 }];
      } else {
        return cartItem.map((x) => {
          if (x.id === item.id) {
            return { ...x, quantity: x.quantity - 1 };
          } else {
            return x;
          }
        });
      }
    });
  };

  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      <ItemContainer count={item.quantity}>
        <img alt={item.title} src={item.image?.src} />
        <div>
          <h1>{item.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: item.body_html }} />
          <p>${item.variants?.[0].price}</p>
        </div>
        <div>
          {item.quantity === 0 ? (
            <AddBtn onClick={onClickAddItem}>ADD</AddBtn>
          ) : (
            <CartBtn>
              <MinusBtn onClick={onClickRemoveItem}>−</MinusBtn>
              {item.quantity}
              <PlusBtn onClick={onClickAddItem}>+</PlusBtn>
            </CartBtn>
          )}
        </div>
      </ItemContainer>{" "}
    </motion.div>
  );
}

const ItemContainer = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 16vw;
  min-width: 200px;
  gap: 10px;
  margin-top: 100px;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  height: 350px;
  border: ${({ count }) => count !== 0 && "4px solid #2D6A4F;"};
  box-sizing: border-box;
  padding: 0px 10px;
  img {
    width: 168px;
    margin-top: -100px;
  }
  h1 {
    font-size: 18px;
    text-align: center;
    min-height: 55px;
  }

  p:first-of-type {
    font-family: Inter;
    color: #959fa8;
    text-align: center;
    margin: 0px 0px 10px 0;
    font-size: 14px;
  }

  p:last-of-type {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    color: #2d6a4f;
  }

  &:hover {
    border: 4px solid #2d6a4f;
    transition: 0s;

    p:first-of-type {
      color: #2d6a4f;
      transition: 0.4s;
    }
  }

  div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  div:last-of-type {
    display: flex;
    flex-direction: row;
  }
`;

export const AddBtn = styled.button`
  background-color: #2d6a4f;
  border: none;
  color: white;
  min-width: 160px;
  padding: 12px;
  border-radius: 20px;
  font-size: 14px;
  margin: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ede3da;
    transition: 0.4s;
    color: black;
  }
`;

export const CartBtn = styled.div`
  background-color: #ede3da;
  border: none;
  min-width: 160px;
  padding: 12px 6px;
  border-radius: 20px;
  font-size: 14px;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Inter;
`;

export const PlusBtn = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const MinusBtn = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  margin: 0;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
`;
