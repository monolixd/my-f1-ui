import React, { useState } from "react"; 
import { Input } from "./Input";

export default {
  title: "Components/Input", 
  component: Input, 
  tags: ["autodocs"], 
  argTypes: {
    label: { control: "text" }, 
    placeholder: { control: "text" }, 
    disabled: { control: "boolean" }, 
    value: { control: false },
    onChange: { control: false },
  },
};

export const Interactive = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  },
  args: {
    label: "ชื่อของคุณ",
    placeholder: "ลองพิมพ์ที่นี่ได้เลย...",
    disabled: false,
  },
};

export const WithLabel = {
  args: {
    label: "อีเมล",
    placeholder: "test@example.com",
  },
};

export const Disabled = {
  args: {
    label: "ช่องที่ถูกปิด",
    placeholder: "พิมพ์ไม่ได้นะ",
    value: "มีค่าอยู่แล้ว",
    disabled: true, 
  },
};
