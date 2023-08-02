import type { Meta, StoryObj } from "@storybook/react";

import BlackBtn from "./BlackBtn";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/BlackBtn",
  component: BlackBtn,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof BlackBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "link",
    label: "Lern more",
  },
};

// export const Secondary: Story = {
//   args: {
//     // label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     // size: "large",
//     // label: "Button",
//   },
// };

// export const Small: Story = {
//   // args: {
//   //   // size: "small",
//   //   // label: "Button",
//   // },
// };
