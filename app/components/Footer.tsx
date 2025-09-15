'use client';

import { FC, useEffect, useState } from 'react';
import BuyMeACoffeeButton from '@/app/components/BuyMeACoffeeButton';

const Footer: FC = () => {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='flex flex-col justify-center items-center my-4 w-full max-w-screen-md'>
      <BuyMeACoffeeButton />
      <p className='text-center text-sm text-chocolate dark:text-gray-600'>
        &copy; {year}. Created with <span className='text-base text-red-500'>&hearts;</span> by Victor Mithamo
      </p>
    </footer>
  );
};

export default Footer;
