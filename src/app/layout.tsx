import "./globals.css";

import type { Metadata } from "next";
import { Lora } from "next/font/google";

import Providers from "@/app/providers";

const lora = Lora({
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

export const metadata: Metadata = {
  title: {
    default: "Nextjs Starter Template",
    template: "%s | Nextjs Starter Template",
  },
  description: "Nextjs 14.2.1 + Tailwind CSS starter template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
