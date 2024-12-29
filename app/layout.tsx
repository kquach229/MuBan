import type { Metadata } from 'next';
import { Dancing_Script, Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

// const dancingScript = Dancing_Script({
//   subsets: ['vietnamese'],
//   variable: '--font-dancing',
// });

export const metadata: Metadata = {
  title: 'TemplateMaster',
  description: 'Simple templates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
