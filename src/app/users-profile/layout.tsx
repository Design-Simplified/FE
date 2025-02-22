import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "User's Profile",
};

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
