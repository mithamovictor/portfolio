import { FC } from 'react';
import Image from 'next/image';
import logo from '@/app/images/vm_logo.png';
import Navigation from '@/app/components/Navigation';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={'flex flex-col md:flex-row justify-between items-center w-full max-w-screen-md p-4 gap-6'}>
      <Link href={'/'}>
        <Image className={'w-52 h-auto'} src={logo} alt={'logo'} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
