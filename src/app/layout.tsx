import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AOSInitializer, CustomCursor, JsonLd } from '@/components';
import { ReactLenis } from 'lenis/react';
import AnimationContainer from '@/providers/AnimationProvider';
import { CursorProvider } from '@/providers/CursorProvider';

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
// TODO: Adjust metadata
export const metadata: Metadata = {
  title: 'Websites That Sell - Gracjan Prusik',
  description:
    'I design modern WordPress and Next.js websites that attract customers and drive sales. Get a website that works for your business!',
  keywords:
    'web design Gryfino, strony internetowe Gryfino, web developer Szczecin, strony WWW, NextJS, WordPress Gryfino, projektowanie stron',

  openGraph: {
    title: 'Websites That Sell - Gracjan Prusik',
    description: 'Modern websites that drive sales and conversions',
    url: 'https://prusk.com',
    siteName: 'Gracjan Prusik Web Design',
    images: [
      {
        url: 'https://prusk.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gracjan Prusik - Web Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Websites That Sell - Gracjan Prusik',
    description: 'Modern websites that drive sales and conversions',
    images: ['https://prusk.com/twitter-image.jpg'],
  },

  alternates: {
    canonical: 'https://prusk.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${velaSans.variable} antialiased`}>
        <JsonLd />
        <CursorProvider>
          <AnimationContainer>
            <ReactLenis root />
            <AOSInitializer />
            <CustomCursor />
            {children}
          </AnimationContainer>
        </CursorProvider>
      </body>
    </html>
  );
}
