import type { Metadata } from 'next';
import { Dancing_Script, Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

// const dancingScript = Dancing_Script({
//   subsets: ['vietnamese'],
//   variable: '--font-dancing',
// });

export const metadata: Metadata = {
  title: 'MuBan',
  description: 'Simple templates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${roboto.className} antialiased`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
