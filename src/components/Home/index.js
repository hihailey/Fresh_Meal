import React, { useState } from "react";
import FormBox from "./FormBox";
import { TextWrapper, HomeContainer, GreenBtn } from "./Home.styled";
import SlideBar from "./SlideBar";
import AnimatedTextWord from "../Animation/AnimatedTextWord";
import { motion } from "framer-motion";
export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  //Open Form
  const onClickFormOpen = () => {
    setIsFormOpen(true);
  };

  //Close Form
  const onClickFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <HomeContainer>
      {!isFormOpen ? (
        <>
          <TextWrapper>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1>
                Chef Crafted Meals
                <br /> Deliciously <span className="highlight">Delivered</span>!
              </h1>
            </motion.div>
            <div>
              <AnimatedTextWord
                text={
                  "Just delicious meals delivered weekly, always ready in three minutes or less"
                }
              />
            </div>
          </TextWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <GreenBtn onClick={onClickFormOpen}>Get Started</GreenBtn>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FormBox onClickFormClose={onClickFormClose} />
        </motion.div>
      )}

      <SlideBar />
    </HomeContainer>
  );
}
