"use client";

import { Card } from "@/components/ui/card";

export default function MyApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Card>{children}</Card>;
}
