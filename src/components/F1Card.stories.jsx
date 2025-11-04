import React from "react";
import { F1Card } from "./F1Card"; 
import { f1Drivers } from "../data/f1data";

export default {
  title: "Components/F1Card",
  component: F1Card,
  tags: ["autodocs"],
  argTypes: {
    driver: { control: "object" }, 
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200 border-xl">
        <Story />
      </div>
    ),
  ],
};

export const Verstappen = {
  args: {
    driver: f1Drivers[1],
  },
};

export const Hamilton = {
  args: {
    driver: f1Drivers[0],
  },
};

export const George = {
  args: {
    driver: f1Drivers[2],
  },
};

export const NoDriver = {
  args: {
    driver: null,
  },
};

export const AllDriversGallery = {
  render: () => (
    <div className="flex flex-wrap items-start justify-center gap-8 p-4">
      {f1Drivers.map((driver) => (
        <F1Card
          key={driver.number || driver.name}
          driver={driver}
        />
      ))}
    </div>
  ),
};
