import React from "react";
import { SlideContainer, SlideWrapper } from "./Home.styled";
import Marquee from "react-fast-marquee";

//Use library called "Marquee"
export default function SlideBar() {
  return (
    <SlideWrapper>
      <Marquee gradient={false} speed={80}>
        <SlideContainer>
          <img
            alt="fresh meal"
            src="https://assets.website-files.com/62b03a7e084ea567885272c1/62b6a0fa5d1d736d2d8ba85d_icon-2.svg"
          ></img>
          <p>
            Chef <br />
            Designed Meals
          </p>
        </SlideContainer>

        <SlideContainer>
          <img
            alt="fresh meal"
            src="https://assets.website-files.com/62b03a7e084ea567885272c1/62b6a04fc89f59bdc0d26075_icon-1.svg"
          ></img>
          <p>
            Fresh <br />
            Rotating Menu
          </p>
        </SlideContainer>

        <SlideContainer>
          <img
            alt="fresh meal"
            src="https://assets.website-files.com/62b03a7e084ea567885272c1/62b6a1371c5c7228c1b4a6ce_icon-8.svg"
          ></img>
          <p>
            High <br />
            Quality Ingredients
          </p>
        </SlideContainer>

        <SlideContainer>
          <img
            alt="fresh meal"
            src="https://assets.website-files.com/62b03a7e084ea567885272c1/62b6a15f7d8adb6b9b015896_icon-10.svg"
          ></img>
          <p>
            Ultimate <br />
            Flexibility
          </p>
        </SlideContainer>

        <SlideContainer>
          <img
            alt="fresh meal"
            src="https://assets.website-files.com/62b03a7e084ea567885272c1/62b6a1284a3197a6f726b656_icon-7.svg"
          ></img>
          <p>
            High
            <br />
            Nutritional Value
          </p>
        </SlideContainer>
      </Marquee>
    </SlideWrapper>
  );
}
