import { FC } from 'react';
import Link from 'next/link';

const BuyMeACoffeeButton: FC = () => (
  <Link
    className='flex items-center px-7 py-2 md:px-9 bg-[#ffdd00] hover:bg-[#ffdd00] text-[#d10000] font-medium md:font-semibold text-sm rounded-md shadow-lg transition ease-linear duration-500 mb-4'
    target='_blank'
    rel='noopener noreferrer'
    href='https://www.buymeacoffee.com/vmithamo'
  >
    <img
      className='w-6 h-6 mr-2'
      src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
      alt='Buy me a coffee'
    />
    <span>Buy me a coffee</span>
  </Link>
);

export default BuyMeACoffeeButton;
