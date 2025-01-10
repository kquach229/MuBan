import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/Footer';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

// const dancingScript = Dancing_Script({
//   subsets: ['vietnamese'],
//   variable: '--font-dancing',
// });

export const metadata: Metadata = {
  title: 'MoBan',
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
          <SidebarProvider open defaultOpen>
            <div className='flex flex-col w-full'>
              <NavBar />
              {children}
              <Footer />
            </div>
            <div className='fixed top-5 left-5 block md:hidden z-[500]'>
              <SidebarTrigger color='white' />
            </div>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
