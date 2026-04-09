import type { Metadata } from "next";
import "@/styles/index.css";
import { Toaster } from "@/app/components/ui/sonner";

export const metadata: Metadata = {
  title: "SIMI - Smart Medical Information System",
  description: "Smart Medical Information System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

