import React from "react";
import styled from "styled-components";

/* TOP EVENT BAR */
export default function EventBar() {
  return (
    <EventBarWrapper>
      <p>SUBSCRIBE NOW & SAVE $20 OFF YOUR FIRST 3 ORDERS!</p>
    </EventBarWrapper>
  );
}

export const EventBarWrapper = styled.div`
  background-color: #ede3da;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
    font-family: Inter;
  }
`;
