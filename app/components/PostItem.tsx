import Link from 'next/link';
import { FC } from 'react';

type PostItemProps = {
  title: string;
  description: string;
  link: string;
};

const PostItem: FC<PostItemProps> = ({ title, description, link }) => {
  return (
    <div className={'flex flex-col p-4'}>
      <h3 className={'mt-4 text-lg'}>
        {title}
      </h3>
      <p className={'text-sm'}>{description}</p>
      <Link
        className={'mt-4 text-sm'}
        href={link}
      >
        Read more...
      </Link>
    </div>
  );
};

export default PostItem;
