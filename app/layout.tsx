import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kudan Local Government',
  description: 'Official website of Kudan Local Government Area, Kaduna State',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* <Navbar /> */}
          {/* <main>{children}</main> */}
          <main>
            <div className='flex flex-col items-center justify-center h-screen'>
              <h1 className='text-xl'>Website under construction</h1>
              <h3 className='text-xl'>😊 Please check back later...</h3>
            </div>
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}