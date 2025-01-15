import { FC } from 'react';
import Link from 'next/link';

const Navigation: FC = () => {
  return (
    <nav className={'flex flex-col'}>
      <ul className={'flex flex-row gap-4'}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/portfolio'}>Portfolio</Link>
        </li>
        <li>
          <Link href={'/posts'}>Posts</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
