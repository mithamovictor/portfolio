import { FC } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

const Socials: FC = () => (
  <>
    <Link
      className={'text-2xl'}
      href={'https://github.com/mithamovictor'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaGithub />
    </Link>
    <Link
      className={'text-2xl'}
      href={'https://www.linkedin.com/in/mithamovictor/'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <FaLinkedin />
    </Link>
  </>
);

export default Socials;
