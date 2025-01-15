import React from 'react';
import './globals.css';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Victor Mithamo',
  description: "Victor Mithamo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={'flex flex-col justify-between w-full h-full min-h-screen bg-white items-center'}>
        <Header />
        <main className={'flex flex-col flex-grow w-full max-w-screen-md p-4'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
