import { FC } from 'react';
import PostsList from '@/app/components/PostsList';

const Posts: FC = () => {
  return (
    <>
      <h2 className={'uppercase text-lg underline mb-4 text-center'}>Posts</h2>
      <PostsList isHome={false} />
    </>
  );
};

export default Posts;
