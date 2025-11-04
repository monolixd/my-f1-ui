import React from "react";
import { F1CardCycler } from "./F1CardCycler";
import { f1Drivers } from "../data/f1data";

export default {
  title: "Components/F1CardCycler", 
  component: F1CardCycler,
  tags: ["autodocs"],

  argTypes: {
    driversList: { control: "object" }, 
  },

  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    driversList: f1Drivers,
  },
};
