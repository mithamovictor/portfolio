import { FC } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaGitlab } from 'react-icons/fa';

const Socials: FC = () => (
  <>
    <Link
      className={'text-2xl text-gray-400 hover:text-black active:text-black focus:text-black'}
      href={'https://x.com/mithamo_vic'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaXTwitter />
    </Link>
    <Link
      className={'text-2xl text-gray-400 hover:text-black active:text-black focus:text-black'}
      href={'https://github.com/mithamovictor'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaGithub />
    </Link>
    <Link
      className={'text-2xl text-gray-400 hover:text-orange-500 active:text-orange-500 focus:text-orange-500'}
      href={'https://gitlab.com/victormithamo'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaGitlab />
    </Link>
    <Link
      className={'text-2xl text-gray-400 hover:text-blue-600 active:text-blue-600 focus:text-blue-600'}
      href={'https://www.linkedin.com/in/victor-mithamo-030646b1/'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaLinkedin />
    </Link>
  </>
);

export default Socials;
