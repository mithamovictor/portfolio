'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={'flex flex-col'}>
      <ul className={'flex flex-row gap-4'}>
        <li>
          <Link className={pathname === '/' ? 'font-bold' : ''} href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className={pathname === '/portfolio' ? 'font-bold' : ''} href={'/portfolio'}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link className={pathname === '/posts' ? 'font-bold' : ''} href={'/posts'}>
            Posts
          </Link>
        </li>
        <li>
          <Link className={pathname === '/contact' ? 'font-bold' : ''} href={'/contact'}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
