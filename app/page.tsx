import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/app/images/vic.png';
import Socials from '@/app/components/Socials';
import PostItem from '@/app/components/PostItem';
import PortfolioList from '@/app/components/PortfolioList';
import PostsList from '@/app/components/PostsList';

export default function Home(): JSX.Element {
  const years: number = new Date().getFullYear() - 2017;

  return (
    <>
      <div className='flex flex-col md:flex-row w-full justify-between gap-8 my-8'>
        <div className='flex flex-col justify-center items-center w-full animate__animated animate__bounceIn text-center'>
          <Image className={'rounded-full w-48 h-auto'} src={image} alt='Image' />
          <h1 className='font-bold text-xl uppercase mt-8 mb-2 animate__animated animate__fadeIn'>Victor Mithamo</h1>
          <h2 className='font-normal text-md leading-none animate__animated animate__fadeIn'>Full Stack Developer</h2>
        </div>
        <div className={'flex flex-col items-start justify-between'}>
          <div>
            <h3 className={'font-bold uppercase mb-2 text-center md:text-left'}>Hello there, I am:</h3>
            <p className='font-normal text-justify hyphens-auto text-sm md:text-md mb-8'>
              An experienced <span className={'font-semibold italic underline'}>Full Stack - Software Developer</span>{' '}
              at{' '}
              <Link
                className={'text-pink-500 hover:text-red-500'}
                href={'https://dtbk.dtbafrica.com/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                Diamond Trust Bank
              </Link>{' '}
              specializing in <span className={'italic'}>React (NextJS), NodeJS (NestJS) and SpringBoot</span>. I have
              {years} years working as a developer with {years - 3} years working in the financial industry. I have also
              gained skills in{' '}
              <span className={'italic'}>
                MySQL, Postgres, MongoDB, Redis, Kafka, RabbitMQ, Docker, Nginx, Kubernetes, Apache, RHEL, Ubuntu and
                CI/CD.
              </span>
            </p>
            <div className={'flex flex-row gap-4'}>
              <Socials />
            </div>
          </div>
          <Link
            href={'/contact'}
            className='px-4 py-2 bg-black text-white text-center font-medium md:font-semibold text-sm rounded-md transition ease-linear duration-500 w-full md:w-40'
          >
            Let&#39;s talk
          </Link>
        </div>
      </div>
      <div className={'flex flex-col my-8'}>
        <h2 className={'text-2xl uppercase text-center font-bold underline mb-4'}>Portfolio</h2>
        <p className={'text-left md:text-center mb-4'}>Here are some of my past projects</p>
        <PortfolioList isHome={true} />
        <div className={'flex flex-col justify-center items-center mt-4'}>
          <Link className={'w-full md:w-40 bg-black text-white text-center py-2 px-4 rounded-md'} href={'/portfolio'}>
            View more
          </Link>
        </div>
      </div>
      <div className={'flex flex-col my-8'}>
        <h2 className={'text-2xl uppercase text-center font-bold underline mb-4'}>Posts</h2>
        <PostsList isHome={true} />
        <div className={'flex flex-col justify-center items-center mt-4'}>
          <Link className={'w-full md:w-40 bg-black text-white text-center py-2 px-4 rounded-md'} href={'/post'}>
            View more
          </Link>
        </div>
      </div>
    </>
  );
}
