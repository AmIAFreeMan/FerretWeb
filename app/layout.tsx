
import localFont from 'next/font/local';
import type { Metadata } from "next";

import "./globals.css";


const monocraft = localFont({
  src: '../public/fonts/Monocraft-01.ttf',
});

export const metadata: Metadata = {
  title: "FerretWeb",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${monocraft.className} h-full antialiased `}
    >
      <body className="overflow-hidden">
        {children}
      </body>
      
    </html>
  );
}
