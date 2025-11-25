import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import SnowEffect from '@/components/SnowEffect';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASEP - Game Story Scripts',
  description: 'Game story scripts and design documentation for ASEP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnowEffect />
        <ReadingProgress />
        <Navigation />
        <main className="relative z-10 pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
