import "./globals.css";

import type { Metadata } from "next";
import Providers from "@/app/providers";
import clsxm from "@/lib/clsxm";
import { lora } from "@/lib/font";

export const metadata: Metadata = {
  title: {
    default:
      "Design Simplified: The Definitive Game Changer in Buying and Selling Digital Contents",
    template:
      "%s | Design Simplified: The Definitive Game Changer in Buying and Selling Digital Contents",
  },
  description:
    "Design Simplified is where creativity meets convenience. Browse, buy, or request custom pre-designed content effortlessly while our AI-powered search redefines how you discover digital content, no more endless scrolling, just smart, interactive exploration. Becoming a seller is just as easy, no approvals, no fees, just sign up and start earning. With a sleek, user-friendly interface, we make everything simple, because great design should never be complicated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/images/navbar/DesignSimplified.svg"
          sizes="any"
        />
      </head>
      <body className={clsxm("w-full", lora.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
