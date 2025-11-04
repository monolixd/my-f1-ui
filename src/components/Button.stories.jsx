import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: { control: "text" },
  },
};

export const Primary = {
  args: {
    label: "Click Me",
    variant: "primary",
    size: "sm",
  },
};

export const Secondary = {
  args: {
    label: "Cancel",
    variant: "secondary",
  },
};

export const Danger = {
  args: {
    label: "Delete Driver",
    variant: "danger",
  },
};

export const Disabled = {
  args: {
    label: "Disable Button",
    variant: "primary",
    disabled: true,
  },
};

