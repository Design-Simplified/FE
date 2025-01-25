import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Seller Page",
};

export default function SellerPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
