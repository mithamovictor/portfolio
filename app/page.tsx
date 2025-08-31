import { JSX } from 'react';
import Link from 'next/link';
import Socials from '@/app/components/Socials';
import PortfolioList from '@/app/components/PortfolioList';
import PostsList from '@/app/components/PostsList';

export default function Home(): JSX.Element {
  const years: number = new Date().getFullYear() - 2017;

  return (
    <>
      <div className='flex flex-col md:flex-row w-full justify-between gap-8'>
        <div className={'flex flex-col w-full items-start justify-between'}>
          <div className={'flex flex-col text-justify hyphens-auto gap-4 mb-4'}>
            <p className='font-normal md:text-md'>
              Hello there, I am an experienced <span className={'font-semibold underline'}>Full Stack - Software Developer</span>{' '}
              specializing in <span className={'font-semibold italic'}>React (NextJS), NodeJS (NestJS) and SpringBoot</span>. I have{' '}
              {years} years working as a developer with {years - 3} years working in the financial industry. I have also
              gained skills in{' '}
              <span className={'font-semibold italic'}>
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
            className='px-4 py-2 bg-[#a066cb] text-white hover:text-white active:text-white text-center font-medium md:font-semibold text-sm rounded-md transition ease-linear duration-500 w-full md:w-40'
          >
            Let&#39;s talk
          </Link>
        </div>
      </div>
      <div className={'flex flex-col my-8'}>
        <h2 className={'text-3xl text-center uppercase mb-4'}>Portfolio</h2>
        <p className={'text-left md:text-center mb-4'}>Here are some of my past projects</p>
        <PortfolioList isHome={true} />
        <div className={'flex flex-col justify-center items-center mt-4'}>
          <Link className={'w-full md:w-40 bg-[#a066cb] text-white hover:text-white active:text-white text-center py-2 px-4 rounded-md'} href={'/portfolio'}>
            View more
          </Link>
        </div>
      </div>
      <div className={'flex flex-col my-8'}>
        <h2 className={'text-3xl text-center uppercase mb-4'}>Posts</h2>
        <PostsList isHome={true} />
        <div className={'flex flex-col justify-center items-center mt-4'}>
          <Link className={'w-full md:w-40 bg-[#a066cb] text-white hover:text-white active:text-white text-center py-2 px-4 rounded-md'} href={'/post'}>
            View more
          </Link>
        </div>
      </div>
    </>
  );
}
