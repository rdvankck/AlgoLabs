'use client';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from '@/context/UserContext';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} flex flex-col min-h-screen text-gray-800 animated-gradient`}>
        <UserProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
