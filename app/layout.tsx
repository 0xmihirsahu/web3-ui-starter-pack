import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Solidity Next.js Starter",
  description:
    "A starter kit for building full stack Ethereum dApps with Solidity and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
