import React from "react";
import { F1Card } from "./F1Card"; 

const verstappenData = {
  name: "Max Verstappen",
  team: "Red Bull Racing",
  number: 1,
  imageUrl:
    "https://img.redbull.com/images/c_crop,w_3840,h_1920,x_0,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2024/11/24/nrqoxx9as35r5ry8ashm/max-verstapen-2024-f1-world-champion-four",
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
    "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2025%2F10%2F30173348%2Flewis-hamilton-ferrari-f1-2025-mexican-grand-prix-1320x742.png",
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
