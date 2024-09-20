import type { Metadata } from "next";
import "./globals.css";
import { WavyBackground } from "@/components/ui/wavy-background";

export const metadata: Metadata = {
  title: "dev social",
  description: `A social media platform for developers. where you can share your projects and ideas with the world`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-full">
      <body className={`h-full w-full relative`}>
        <WavyBackground />
        {children}
      </body>
    </html>
  );
}
