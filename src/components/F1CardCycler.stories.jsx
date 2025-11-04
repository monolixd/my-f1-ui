import React from "react";
import { F1CardCycler } from "./F1CardCycler";

const f1Drivers = [
  {
    name: "Lewis Hamilton",
    team: "Mercedes AMG Petronas",
    number: 44,
    imageUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
    stats: { wins: 103, poles: 104, wdcs: 7 },
  },
  {
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: 1,
    imageUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
    stats: { wins: 54, poles: 38, wdcs: 3 },
  },
  {
    name: "George Russell", 
    team: "Mercedes AMG Petronas",
    number: 63,
    imageUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
    stats: { wins: 1, poles: 1, wdcs: 0 },
  },
];

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
