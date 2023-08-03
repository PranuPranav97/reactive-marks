import React from "react";
import { ICheckMarkClassicProps } from "../../types/checkmark-classic";

const CheckMarkClassic: React.FC<ICheckMarkClassicProps> = (
  props: ICheckMarkClassicProps
) => {
  return (
    <div className="checkmark-classic-check-anime-outer">
      {" "}
      {/* Use the CSS Module class */}
      <div className="checkmark-classic-check-anime-mask checkmark-classic-check-anime-mask-right"></div>
      <div className="checkmark-classic-check-anime-mask checkmark-classic-check-anime-mask-left"></div>
      <span className="checkmark-classic-check-mask"></span>
      <div className="checkmark-classic-check-mark"></div>
    </div>
  );
};

export { CheckMarkClassic };
