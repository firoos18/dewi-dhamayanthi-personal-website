import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/atoms/Toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dewi Dhamayanthi",
  description:
    "Personal website of Dewi Dhamayanthi, professional VA and bookkeeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} min-h-screen overflow-y-auto antialiased`}
      >
        <div className="relative text-black">
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
