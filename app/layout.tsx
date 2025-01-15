import React from "react";
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col justify-between w-full h-full min-h-screen bg-white items-center"}>
        <Header />
        <main className={"flex flex-col flex-grow w-full max-w-screen-lg"}>
        {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
