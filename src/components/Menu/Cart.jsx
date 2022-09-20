import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { AddBtn } from "./Item";
import { CartContainer, Title, EmptyCart, CartWrapper } from "./Menu.styled";
import { useAtom } from "jotai";
import { cartItemAtom } from "../../atom/menu";
import cart from "../../img/cart.png";
import { motion } from "framer-motion";

export default function Cart() {
  const [cartItem, setCartItem] = useAtom(cartItemAtom);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setCartItem(cartItem);
    console.log("SET", cartItem);
    // Sum of quantity of all items in cart
    if (cartItem.reduce((n, { quantity }) => n + quantity, 0) > 0) {
      setIsEmpty(false);
    } else {
      //If the total quantity = 0, show the empty cart
      setIsEmpty(true);
    }
  }, [cartItem, setCartItem]);

  const getCartItem = cartItem.map((item, i) => {
    return <CartItem key={i} data={item} />;
  });

  return (
    <CartContainer>
      <Title>My Cart</Title>
      {isEmpty ? (
        <EmptyCart>
          <img src={cart}></img>
          <h1>Your cart is empty!</h1>
          <p>Looks like you have not added anything to your cart.</p>
        </EmptyCart>
      ) : (
        <CartWrapper>{getCartItem}</CartWrapper>
      )}
      <AddBtn>Checkout</AddBtn>
    </CartContainer>
  );
}
