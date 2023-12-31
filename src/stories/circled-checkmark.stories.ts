import type { Meta, StoryObj } from "@storybook/react";
import "../styles/circled-checkmark.css";

import { CircledCheckMark } from "../components/circled-checkmark";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Circled Checkmark",
  component: CircledCheckMark,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CircledCheckMark>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    checkMarkColor: "green",
    size: 2,
    animationSpeed: 0.6,
    height: 100,
    width: 100,
    circleColor: "green",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
