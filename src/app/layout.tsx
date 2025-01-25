import "./globals.css";

import type { Metadata } from "next";
import Providers from "@/app/providers";
import clsxm from "@/lib/clsxm";
import { lora } from "@/lib/font";

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
      <body className={clsxm("w-full", lora.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
