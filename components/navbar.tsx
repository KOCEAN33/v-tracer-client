'use client';

import Link from 'next/link';

import { ComboboxDropdownMenu } from '@/components/user-menu';
import Container from '@/components/container';

const Navbar = () => {
  return (
    <Container>
      <div className="border-b-[1px]">
        <div className="z-40 flex h-16 items-center justify-between px-4">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">S3C</p>
          </Link>

          <ComboboxDropdownMenu />
        </div>
      </div>
    </Container>
  );
};

// TODO Popover 이용해서 검색 메뉴 구성

export default Navbar;
