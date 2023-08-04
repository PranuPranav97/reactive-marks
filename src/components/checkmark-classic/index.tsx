import React from "react";
import styled from "styled-components";
import { ICheckMarkClassicProps } from "../../types/checkmark-classic";

const CheckMarkClassic: React.FC<ICheckMarkClassicProps> = (
  props = {
    checkMarkColor: "green",
    circleColor: "green",
    animationSpeed: 0.4,
    height: 25,
    width: 25,
  }
) => {
  const CheckMarkDiv = styled.div`
    border: solid 8px ${props.circleColor};
    &::before {
      border-left: solid 10px ${props.checkMarkColor};
      border-bottom: solid 10px ${props.checkMarkColor};
    }
  `;

  const CheckMarkMask = styled.span`
    animation: check-ap ${props.animationSpeed}s linear forwards 1;
  `;

  return (
    <div
      className="checkmark-classic-check-anime-outer"
      style={{ height: props.height, width: props.width }}>
      <div className="checkmark-classic-check-anime-mask checkmark-classic-check-anime-mask-right"></div>
      <div className="checkmark-classic-check-anime-mask checkmark-classic-check-anime-mask-left"></div>
      <span className="checkmark-classic-check-mask"></span>
      <CheckMarkDiv className="checkmark-classic-check-mark"></CheckMarkDiv>
    </div>
  );
};

export { CheckMarkClassic };
