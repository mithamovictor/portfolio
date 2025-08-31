import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BuyMeACoffeeButton: FC = () => (
  <Link
    className='flex items-center px-7 py-2 md:px-9 font-medium md:font-semibold text-sm rounded-md bg-[#a066cb] text-white hover:text-white active:text-white transition ease-linear duration-500 mb-4'
    target='_blank'
    rel='noopener noreferrer'
    href='https://www.buymeacoffee.com/vmithamo'
  >
    <Image
      className='mr-2'
      src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
      alt='Buy me a coffee'
      width={20}
      height={20}
    />
    <span>Buy me a coffee</span>
  </Link>
);

export default BuyMeACoffeeButton;
