import Container from '@/components/ui/container';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">SAAS by VSC</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

// TODO Popover 이용해서 검색 메뉴 구성

export default Navbar;
