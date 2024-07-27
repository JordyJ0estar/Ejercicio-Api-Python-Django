import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TitleApi from "@/components/Title";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordy Cabezas",
  description: "Ejercicio API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <TitleApi/>
        {children}
      </body>
    </html>
  );
}
