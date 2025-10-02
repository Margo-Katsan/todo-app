import { ReactNode } from 'react';

import { Geist_Mono, Lato } from 'next/font/google';

import { Providers } from './Providers';
import './globals.css';

const latoSans = Lato({
  variable: '--font-lato-sans',
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Todo App',
  description: 'Simple todo app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${latoSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
