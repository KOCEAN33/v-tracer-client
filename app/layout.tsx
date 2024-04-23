import './globals.css';
import '../public/static/fonts/pretendardvariable.css';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { Header } from '@/components/navbar/header';

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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ReactQueryProvider>
              <div className="relative flex flex-col">
                <Header />
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
