"use client";

import { RootLayout } from "@/app/components/layouts/RootLayout";

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}

