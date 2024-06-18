import ModalProvider from "@/components/modals/modal-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmos Persona Personality Quiz Test",
  description: "Cosmos Persona Personality Quiz Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
