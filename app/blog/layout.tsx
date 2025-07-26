import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kuldeep Portfolio website",
  description: "A personal portfolio website that showcases my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container className="px-10 md:pt-20 md:pb-10 min-h-screen">{children}</Container>;
}
