import { FC } from 'react';
import Image from 'next/image';
import logo from '@/app/images/logo/vic_logo.svg';
import Navigation from '@/app/components/Navigation';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={'flex flex-col md:flex-row justify-between items-center w-full my-4 gap-8'}>
      <Link href={'/'}>
        <Image className={'w-100 max-w-[100px] md:max-w-[150px] h-auto'} src={logo} alt={'logo'} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
