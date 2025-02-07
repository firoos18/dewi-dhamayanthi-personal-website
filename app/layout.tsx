import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topbar";

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
        className={`${poppins.variable} antialiased min-h-screen overflow-y-auto`}
      >
        <TopBar />
        <div className="relative text-black">{children}</div>
      </body>
    </html>
  );
}
