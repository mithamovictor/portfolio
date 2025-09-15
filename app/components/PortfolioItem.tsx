import { FC } from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type PortfolioItemProps = {
  link: string;
  title: string;
  description: string;
  year: string;
  image: string | StaticImport;
};

const PortfolioItem: FC<PortfolioItemProps> = ({ link, title, description, year, image }) => {
  return (
    <div className={'flex flex-col w-full p-4'}>
      <div className={'flex flex-col justify-center items-center w-full h-40 overflow-hidden mb-4'}>
        <Image src={image} alt={`${title} image`} />
      </div>
      <div className={'flex flex-row justify-between items-center'}>
        <Link className={'uppercase'} href={link} target={'_blank'} rel={'noopener noreferrer'}>
          {title}
        </Link>
        <Link href={link} target={'_blank'} rel={'noopener noreferrer'}>
          <FaExternalLinkAlt />
        </Link>
      </div>
      <div className={'grid grid-cols-1 gap-2 mt-2'}>
        <p className={'text-sm italic'}>Year: {year}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
