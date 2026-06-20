import { FC } from 'react';
import Grid from '@mui/material/Grid';
import PortfolioItem from '@/app/components/PortfolioItem';
import placeholder from '@/app/images/logo/vic_logo.svg';
import mediloop from '@/app/images/sites/mediloop.png';
import stb from '@/app/images/sites/stb_games.png';
import dgmc from '@/app/images/sites/dgmc.png';
import spokenswahili from '@/app/images/sites/ss.png';
import kqg from '@/app/images/sites/kqg.png';
import saischool from '@/app/images/sites/ss_school.png';
import saicentre from '@/app/images/sites/ssc.png';
import calculator from '@/app/images/sites/calculator.png';
import clock from '@/app/images/sites/clock.png';

const allPortfolioItems = [
  {
    image: mediloop,
    title: 'Mediloop',
    problem: 'Many medical facilities store patient records in paper form and without any form of digital records.',
    solution: 'Digitize medical facilities that have no form of digitization.',
    stack: 'Java, Spring Boot, React, PostgreSQL',
    outcome: 'Enabled 10+ clinics to go digital with safe record keeping.',
    year: '2026',
    link: 'https://mediloop.co.ke/',
  },
  {
    image: placeholder,
    title: 'Infiniti Lite',
    problem: 'Merchants needed a secure, direct way to receive payments to their bank accounts.',
    solution: 'Built a robust merchant portal integrated with banking APIs.',
    stack: 'Java, Spring Boot, React, PostgreSQL',
    outcome: 'Enabled 100+ merchants to process payments securely with 99.9% uptime.',
    year: '2023',
    link: 'https://www.infinitiafrica.co/payment-gateway/',
  },
  {
    image: stb,
    title: 'Spot The Ball',
    problem: 'High-latency in a real-time gaming application leading to poor user experience.',
    solution: 'Optimized backend logic and implemented WebSocket for real-time updates.',
    stack: 'Node.js, React',
    outcome: 'Reduced latency by 60%, increasing user retention by 25%.',
    year: '2019',
    link: '#',
  },
  {
    image: dgmc,
    title: 'Clinic Software',
    problem: 'Paper-based patient records causing delays and data loss in a busy clinic.',
    solution: 'Developed a comprehensive electronic health record (EHR) system with secure data storage.',
    stack: 'PHP, MySQL',
    outcome: 'Reduced patient wait times by 40% and eliminated paper record costs.',
    year: '2019',
    link: 'https://dgmc.cc',
  },
  {
    image: spokenswahili,
    title: 'Spoken Swahili - Posts',
    problem: 'Limited access to quality Swahili language tutorials for beginners.',
    solution: 'Created and recorded a comprehensive series of video tutorials and blog posts.',
    stack: 'WordPress, PHP, JavaScript, MySQL, CSS, jQuery',
    outcome: 'Reached 1000+ monthly learners with engaging language content.',
    year: '2018',
    link: 'https://www.spokenswahili.com/',
  },
  {
    image: kqg,
    title: 'Kenya Quilt Guild',
    problem: 'The guild had an outdated website that was difficult to maintain and not mobile-friendly.',
    solution: 'Rebuilt the theme and created custom plugins for member management and gallery features.',
    stack: 'WordPress, PHP, JavaScript, MySQL, CSS, jQuery',
    outcome: 'Improved mobile traffic by 50% and simplified content updates for the guild.',
    year: '2018',
    link: 'https://www.kenyaquiltguild.org/',
  },
  {
    image: saischool,
    title: 'Sathya Sai School Kisaju',
    problem: 'The school needed a professional online presence to share information with parents and donors.',
    solution: 'Developed a modern website with custom plugins for news updates and school information.',
    stack: 'WordPress, PHP, JavaScript, MySQL, CSS, jQuery',
    outcome: 'Established a strong online identity and improved communication with stakeholders.',
    year: '2017',
    link: 'https://sathyasaischoolkisaju.org/',
  },
  {
    image: saicentre,
    title: 'Sri Sathya Sai Centre - Nairobi',
    problem: "The centre's existing site was non-responsive and lacked modern navigation.",
    solution: 'Rebuilt the entire website with a responsive theme and custom-built plugins.',
    stack: 'WordPress, PHP, JavaScript, MySQL, CSS, jQuery',
    outcome: "Enhanced user engagement and made the centre's resources accessible on all devices.",
    year: '2017',
    link: 'https://sathyasaicentrekenya.org/',
  },
  {
    image: calculator,
    title: 'Javascript Calculator',
    problem: 'Need for a high-precision, interactive calculation tool for financial modeling.',
    solution: 'Implemented a custom math engine to handle decimal precision in the browser.',
    stack: 'JavaScript, HTML, CSS',
    outcome: 'Created a reliable tool used for quick financial estimations and educational purposes.',
    year: '2017',
    link: 'https://codepen.io/karungarum/pen/mjWzBX',
  },
  {
    image: clock,
    title: 'Swiss Movement Clock',
    problem: 'The challenge of replicating complex mechanical movements using only web technologies.',
    solution: 'Built a clock that mimics the Apple Watch interface with smooth Swiss movement animation.',
    stack: 'JavaScript, HTML, CSS',
    outcome: 'Showcased advanced CSS and JS animation techniques with a highly polished UI.',
    year: '2017',
    link: 'https://codepen.io/karungarum/pen/jQPXGY',
  },
];

const PortfolioList: FC<{ isHome: boolean }> = ({ isHome }) => {
  const items = isHome ? allPortfolioItems.slice(0, 4) : allPortfolioItems;
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid key={item.title} size={{ xs: 12, md: 6 }}>
          <PortfolioItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PortfolioList;
