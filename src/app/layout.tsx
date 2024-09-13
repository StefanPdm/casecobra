import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Case Cobra',
  description: 'Create custom phone cases for your favorite memories.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='flex flex-col min-h-[calc(100vh-3.5rem-4.5rem-1px)]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
