'use client';

import Link from 'next/link';
import { Package2 } from 'lucide-react';

import { UserAvatarMenu } from '@/components/navbar/user-menu';
import { ModeToggle } from '@/components/navbar/dark-mode-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

import { ModalType, useModal } from '@/hooks/use-modal-store';
import { useAuth } from '@/hooks/use-auth-store';

import { config } from '@/config/config';
import { cn } from '@/lib/utils';

export function Header() {
  const { onOpen } = useModal();
  const login = useAuth();

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action);
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Icons.logo className="h-6 w-6" />
          <span className="hidden truncate font-bold sm:inline-block">
            {config.site.name}
          </span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </Link>
      </nav>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          {/*<div className="relative">*/}
          {/*  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />*/}
          {/*  <Input*/}
          {/*    type="search"*/}
          {/*    placeholder="Search products..."*/}
          {/*    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"*/}
          {/*  />*/}
          {/*</div>*/}
        </form>
        <Link href={config.site.links.github} target="_blank" rel="noreferrer">
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
        <Link href={config.site.links.twitter} target="_blank" rel="noreferrer">
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
        {!login ? (
          <Button className="ml-2" onClick={(e) => onAction(e, 'logIn')}>
            로그인
          </Button>
        ) : (
          <UserAvatarMenu />
        )}
      </div>
    </header>
  );
}
