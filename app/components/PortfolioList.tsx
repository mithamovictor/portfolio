import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import PortfolioItem from '@/app/components/PortfolioItem';
import placeholder from '@/app/images/vm_icon.png';
import stb from '@/app/images/sites/stb_games.png';
import dgmc from '@/app/images/sites/dgmc.png';
import spokenswahili from '@/app/images/sites/ss.png';
import kqg from '@/app/images/sites/kqg.png';
import saischool from '@/app/images/sites/ss_school.png';
import saicentre from '@/app/images/sites/ssc.png';
import calculator from '@/app/images/sites/calculator.png';
import clock from '@/app/images/sites/clock.png';

type PortfolioItemProps = {
  link: string;
  title: string;
  description: string;
  year: string;
  image: string | StaticImport;
};

const PortfolioList: FC<{ isHome: boolean }> = ({ isHome }) => {
  let portfolioItems: Array<PortfolioItemProps> = [
    {
      image: placeholder,
      title: 'Infiniti Lite',
      description: 'A merchant portal to enable merchants receive payments direct to bank.',
      year: '2023',
      link: 'https://www.infinitiafrica.co/payment-gateway/',
    },
    {
      image: stb,
      title: 'Spot The Ball',
      description: 'A gaming platform where one would try and guess the position of a ball for a prize.',
      year: '2019',
      link: '#',
    },
    {
      image: dgmc,
      title: 'Clinic Software',
      description: 'I built a clinic platform to manage patients, appointments and data storage.',
      year: '2019',
      link: 'https://dgmc.cc',
    },
    {
      image: spokenswahili,
      title: 'Spoken Swahili - Posts',
      description: 'I created and recorded some swahili tutorials for spoken swahili.',
      year: '2018',
      link: 'https://www.spokenswahili.com/',
    },
    {
      image: kqg,
      title: 'Kenya Quilt Guild',
      description: 'I rebuilt the theme and custom plugins Kenya Quilt Guild website.',
      year: '2018',
      link: 'https://www.kenyaquiltguild.org/',
    },
    {
      image: saischool,
      title: 'Sathya Sai School Kisaju',
      description: 'I rebuilt the theme and custom plugins for the school website.',
      year: '2017',
      link: 'https://sathyasaischoolkisaju.org/',
    },
    {
      image: saicentre,
      title: 'Sri Sathya Sai Centre - Nairobi',
      description: "I rebuilt the theme and custom plugins for the centre's website.",
      year: '2017',
      link: 'https://sathyasaicentrekenya.org/',
    },
    {
      image: calculator,
      title: 'Javascript Calculator',
      description: 'I built a calculator purely in HTMC/CSS and JavaScript.',
      year: '2017',
      link: 'https://codepen.io/karungarum/pen/mjWzBX',
    },
    {
      image: clock,
      title: 'Swiss Movement Clock',
      description: 'I a clock to mimic the apple watch with swiss movement.',
      year: '2017',
      link: 'https://codepen.io/karungarum/pen/jQPXGY',
    },
  ];

  if (isHome) {
    portfolioItems = portfolioItems.slice(0, 4);
  }

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-between'}>
      {portfolioItems.map((item: PortfolioItemProps, i: number) => {
        return (
          <PortfolioItem
            key={i}
            image={item.image}
            link={item.link}
            title={item.title}
            description={item.description}
            year={item.year}
          />
        );
      })}
    </div>
  );
};

export default PortfolioList;
