import type { Metadata } from 'next';
import { Orbitron, Exo_2 } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
  display: 'swap',
});

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
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className={exo2.className}>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
