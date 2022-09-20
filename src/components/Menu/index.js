import React, { useEffect } from "react";
import Item from "./Item";
import { Banner, MenuWrapper, ItemGrid, MenuGrid } from "./Menu.styled";
import Data from "../../data/menuData.json";
import Cart from "./Cart";
import { useAtom } from "jotai";
import { cartItemAtom } from "../../atom/menu";
import { motion } from "framer-motion";
import moment from "moment/moment";
import AnimatedTextWord from "../Animation/AnimatedTextWord";

export default function Menu() {
  const [cartItem, setCartItem] = useAtom(cartItemAtom);

  //set the menu data from JSON data
  useEffect(() => {
    let dataWithQuantity = Data.products.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setCartItem(dataWithQuantity);
  }, [setCartItem]);

  //loop the all data in JSON file
  const getItems = cartItem.map((item, i) => {
    return <Item key={i} data={item} />;
  });

  return (
    <MenuWrapper>
      <motion.div
        className="backgroundImage"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 3,
        }}
      />
      <Banner>
        <h1>
          <AnimatedTextWord text={"Choose  Your  Meal"} />
        </h1>
        <p>
          Showing All Meals for
          <span className="orange"> {moment().format("dddd, MMM Do")}</span>
        </p>
      </Banner>

      <MenuGrid>
        <ItemGrid>{getItems}</ItemGrid>
        <Cart />
      </MenuGrid>
    </MenuWrapper>
  );
}
