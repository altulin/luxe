import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "link",
    label: "shop",
    href: "/",
  },
};

export const Secondary: Story = {
  args: {
    type: "link",
    label: "Lern more",
    href: "/",
  },
};

export const Dark: Story = {
  args: {
    type: "link",
    label: "Lern more",
    href: "/",
  },
};

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
