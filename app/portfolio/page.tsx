import { FC } from 'react';
import PortfolioList from '@/app/components/PortfolioList';

const PortfolioPage: FC = () => {
  return (
    <div>
      <h2 className={'text-3xl text-center uppercase mb-4'}>Portfolio</h2>
      <PortfolioList isHome={false} />
    </div>
  );
};

export default PortfolioPage;
