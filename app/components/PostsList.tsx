import { FC } from 'react';
import PostItem from '@/app/components/PostItem';

type PostItemProps = {
  title: string;
  description: string;
  link: string;
};

const PostsList: FC<{ isHome: boolean }> = ({ isHome }) => {
  let postsList: PostItemProps[] = [
    {
      title: 'Article 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
    {
      title: 'Article 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
    {
      title: 'Article 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
    {
      title: 'Article 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
    {
      title: 'Article 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
    {
      title: 'Article 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus iaculis ex sit amet sagittis. Sed rutrum tortor nec ultricies mattis.',
      link: 'https://www.infinitiafrica.co/',
    },
  ];

  if (isHome) {
    postsList = postsList.slice(0, 4);
  }

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-between'}>
      {postsList.map((item: PostItemProps, i: number) => (
        <PostItem key={i} title={item.title} link={item.link} description={item.description} />
      ))}
    </div>
  );
};

export default PostsList;
