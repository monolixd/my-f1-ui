import React from "react";
import { F1Card } from "./F1Card"; 

const verstappenData = {
  name: "Max Verstappen",
  team: "Red Bull Racing",
  number: 1,
  imageUrl:
    "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
  stats: {
    wins: 54,
    poles: 38,
    wdcs: 3,
  },
};

const hamiltonData = {
  name: "Lewis Hamilton",
  team: "Mercedes AMG Petronas",
  number: 44,
  imageUrl:
    "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
  stats: {
    wins: 103,
    poles: 104,
    wdcs: 7,
  },
};

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
    driver: verstappenData,
  },
};

export const Hamilton = {
  args: {
    driver: hamiltonData,
  },
};

export const NoDriver = {
  args: {
    driver: null,
  },
};
