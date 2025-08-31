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
      <body className={'flex flex-col justify-between w-full h-full min-h-screen items-center'}>
      <div className={'flex flex-col justify-between items-center w-full max-w-screen-lg p-4 min-h-screen'}>
        <Header />
        <main className={'flex flex-col flex-grow w-full my-4'}>{children}</main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
