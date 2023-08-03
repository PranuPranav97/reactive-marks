import React from "react";
import { ICircledCheckMarkProps } from "../../types/circled-checkmark";

export const CircledCheckMark: React.FC<ICircledCheckMarkProps> = (
  props: ICircledCheckMarkProps
) => {
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
        className="svg "
        style={{ height: props.height, width: props.width }}>
        <circle
          className="circled-checkmark-path circled-checkmark-circle"
          fill="none"
          stroke={props.circleColor}
          strokeWidth="6"
          strokeMiterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        <polyline
          className="circled-checkmark-path circled-checkmark-check"
          fill="none"
          stroke={props.checkMarkColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
    </div>
  );
};
