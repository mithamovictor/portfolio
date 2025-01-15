import { FC } from 'react';
import PortfolioList from '@/app/components/PortfolioList';

const PortfolioPage: FC = () => {
  return (
    <div>
      <h2 className={'uppercase text-lg underline mb-4 text-center'}>Porfolio</h2>
      <PortfolioList isHome={false} />
    </div>
  );
};

export default PortfolioPage;
