import { ImageSlider } from "./ImageSlider";


const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
];

export default {
  title: "Components/ImageSlider",
  component: ImageSlider,
  tags: ["autodocs"],
  argTypes: {
    images: { control: "object" },
    autoPlay: { control: "boolean" },
    autoPlayInterval: { control: "number" },
  },
};

export const Default = {
  args: {
    images: MOCK_IMAGES,
    autoPlay: true,
  },
};

export const AutoPlayOff = {
  args: {
    ...Default.args,
    autoPlay: false,
  },
};

export const InteractionTest = {
  args: {
    ...AutoPlayOff.args,
  },

  play: async ({ canvas, userEvent }) => {
    const nextButton = await canvas.findByRole("button", {
      name: /next slide/i,
    });
    const prevButton = await canvas.findByRole("button", {
      name: /previous slide/i,
    });
    const slide3Dot = await canvas.findByRole("button", {
      name: /go to slide 3/i,
    });

    await userEvent.click(nextButton);
    await new Promise((r) => setTimeout(r, 500)); 

    await userEvent.click(nextButton);
    await new Promise((r) => setTimeout(r, 500)); 

    await userEvent.click(prevButton);
    await new Promise((r) => setTimeout(r, 500)); 

    await userEvent.click(slide3Dot);
  },
};
