import { FC } from 'react';
import PostsList from '@/app/components/PostsList';

const Posts: FC = () => {
  return (
    <>
      <h2 className={'text-3xl text-center uppercase mb-4'}>Posts</h2>
      <PostsList isHome={false} />
    </>
  );
};

export default Posts;
