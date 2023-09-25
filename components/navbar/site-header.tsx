'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { config } from '@/config/config';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/navbar/main-nav';
import { Button, buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/navbar/dark-mode-toggle';

import { UserAvatarMenu } from '@/components/navbar/user-menu';

import { ModalType, useModal } from '@/hooks/use-modal-store';
import { useAuth } from '@/hooks/use-auth-store';

export function SiteHeader() {
  const { onOpen } = useModal();
  const user = useAuth();

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action);
  };

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        {/*<MobileNav />*/}
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/*<CommandMenu />*/}
          </div>
          <div className="flex items-center">
            <Link
              href={config.site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  }),
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={config.site.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  }),
                )}
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
            {user ? (
              <UserAvatarMenu />
            ) : (
              <Button className="ml-2" onClick={(e) => onAction(e, 'logIn')}>
                로그인
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
