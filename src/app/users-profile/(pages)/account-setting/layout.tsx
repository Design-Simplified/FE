import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Account Setting",
};

export default function AccountSettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
