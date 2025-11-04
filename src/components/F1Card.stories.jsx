import React from "react";
import { F1Card } from "./F1Card"; // Import Card ที่เราเพิ่งอัปเดต

// 1. "Mock Data" (ข้อมูลจำลอง)
// เราเอา "ตัวแปร" exampleDriver ที่คุณสร้าง มาไว้ที่นี่
const verstappenData = {
  name: "Max Verstappen",
  team: "Red Bull Racing",
  number: 1,
  // (ผมขออนุญาตใช้รูปจาก F1.com นะครับ)
  imageUrl:
    "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
  stats: {
    wins: 54,
    poles: 38,
    wdcs: 3,
  },
};

// ข้อมูลของ Hamilton (จากบทเรียนก่อน)
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

// 2. การตั้งค่าหลัก (Default Export)
export default {
  title: "Components/F1Card",
  component: F1Card,
  tags: ["autodocs"],
  argTypes: {
    driver: { control: "object" }, // บอก Storybook ว่านี่คือ Object
  },
  // 3. Decorator (ตัวตกแต่ง)
  // เราใช้พื้นหลังสีเทาเข้ม (จากโค้ด App.jsx ของคุณ)
  // เพื่อให้ Card ของเราเด่นขึ้นมา
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
