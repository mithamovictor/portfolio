import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DevToArticle } from '@/app/components/PostsList';
import logo from '@/app/images/logo/vic_logo_4.png';

interface PostItemProps {
  post: DevToArticle;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const hasCover = Boolean(post.cover_image);

  return (
    <article className='flex flex-col p-4 rounded-2xl shadow hover:shadow-lg transition'>
      {hasCover ? (
        <Image
          src={post.cover_image as string} // external URL
          alt={post.title}
          width={640}
          height={360}
          className='rounded-xl object-cover'
        />
      ) : (
        <Image
          src={logo} // local fallback
          alt='Default cover'
          width={640}
          height={360}
          className='rounded-xl object-cover'
        />
      )}

      <h3 className='mt-4 text-lg font-semibold'>{post.title}</h3>
      <p className='text-gray-600'>{post.description}</p>

      <Link className='mt-4 text-blue-600 hover:underline' href={post.url} target='_blank' rel='noopener noreferrer'>
        Read more →
      </Link>
    </article>
  );
};

export default PostItem;
