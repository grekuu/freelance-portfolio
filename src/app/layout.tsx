import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const velaSans = localFont({
  src: [
    {
      path: '../fonts/VelaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/VelaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/VelaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-vela-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Websites That Sell - Gracjan Prusik',
  description:
    'I design modern WordPress and Next.js websites that attract customers and drive sales. Get a website that works for your business!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${velaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
