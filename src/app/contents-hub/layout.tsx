import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Contents Hub",
};

export default function ContentsHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
