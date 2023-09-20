import './globals.css';
import '../public/static/fonts/pretendardvariable.css';

import { SiteHeader } from '@/components/navbar/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';

export const metadata = {
  title: 'SAAS Review',
  description: 'SAAS Review service by tries.io',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="kr">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex flex-col">
            <SiteHeader />
          </div>
          <ToastProvider />
          <ModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
