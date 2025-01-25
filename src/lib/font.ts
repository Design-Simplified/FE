import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: [
    "400", // Regular
    "500", // Medium
    "600", // Semi-Bold
    "700", // Bold
  ],
  style: [
    "normal", // Normal style
    "italic", // Italic style
  ],
  display: "swap", // Display fallback setting
  preload: true, // Preloads the font
  variable: "--font-lora", // Custom CSS variable for font
});
