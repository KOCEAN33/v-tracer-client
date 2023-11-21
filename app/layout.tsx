import './globals.css';
import '../public/static/fonts/pretendardvariable.css';

import { SiteHeader } from '@/components/navbar/site-header';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'tries.io',
  description: 'by tries.io',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ModalProvider />
          <AuthProvider />
          <Toaster />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ReactQueryProvider>
              <div className="relative flex flex-col">
                <SiteHeader />
              </div>
              {children}
            </ReactQueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
