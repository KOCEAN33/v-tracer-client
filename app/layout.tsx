import './globals.css';
import '../public/static/fonts/pretendardvariable.css';

import { SiteHeader } from '@/components/navbar/site-header';
import { ThemeProvider } from '@/providers/theme-provider';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import { AuthProvider } from '@/providers/auth-provider';
import { Toaster } from '@/components/ui/toaster';
import { ReactQueryProvider } from '@/providers/react-query-provider';

export const metadata = {
  title: 'SAAS Review',
  description: 'SAAS Review service by tries.io',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AuthProvider />
          <ToastProvider />
          <ModalProvider />
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
