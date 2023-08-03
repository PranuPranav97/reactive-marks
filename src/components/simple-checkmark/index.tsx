import React from "react";
import { ISimpleCheckmarkProps } from "../../types/simple-checkmark";

export const SimpleCheckMark: React.FC<ISimpleCheckmarkProps> = (
  props: ISimpleCheckmarkProps
) => {
  const strokeWidth = props.size > 4 || props.size <= 0 ? 4 : props.size;
  const strokeLinecap = props.endgeRounded ? "round" : "square";
  const strokeLinejoin = props.endgeRounded ? "round" : "miter";
  return (
    <div>
      <svg className="simple-checkmark-animated-check" viewBox="0 0 24 24">
        <path
          style={{
            stroke: props.checkMarkColor,
            strokeWidth,
            animation: `simple-checkmark-draw ${props.animationSpeed}s linear forwards`,
            strokeLinecap,
            strokeLinejoin,
          }}
          d="M4.1 12.7L9 17.6 20.3 6.3"
          fill="none"
          className="simple-checkmark-path"
        />
      </svg>
    </div>
  );
};
