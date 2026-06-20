import { ReactNode } from 'react';
import { Sora, Inter } from 'next/font/google';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import ThemeRegistry from '@/app/ThemeRegistry';
import './globals.css';

import Box from '@mui/material/Box';

const SoraFont = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const InterFont = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: 'Victor Mithamo | Full-Stack Software Engineer',
  description:
    'Victor Mithamo — Full-Stack Software Engineer (Java + React / Spring Boot) building reliable, scalable business applications with 8+ years of experience in the financial sector.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${SoraFont.className} ${InterFont.className}`}>
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
