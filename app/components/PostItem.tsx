import Link from 'next/link';
import { FC } from 'react';

type PostItemProps = {
  title: string;
  description: string;
  link: string;
};

const PostItem: FC<PostItemProps> = ({ title, description, link }) => {
  return (
    <div className={'flex flex-col border border-gray-100 shadow-lg rounded-md p-4'}>
      <h3 className={'text-pink-500 hover:text-red-500 active:text-red-500 focus:text-red-500 mt-4 text-lg'}>
        {title}
      </h3>
      <p className={'text-sm'}>{description}</p>
      <Link
        className={'text-pink-500 hover:text-red-500 active:text-red-500 focus:text-red-500 mt-4 text-sm'}
        href={link}
      >
        Read more...
      </Link>
    </div>
  );
};

export default PostItem;
