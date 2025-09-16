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
    <article className="flex flex-col md:flex-row">
  {hasCover ? (
    <Image
      src={post.cover_image as string} // external URL
      alt={post.title}
      width={640}
      height={360}
      className="w-full md:w-1/2 object-cover"
    />
  ) : (
    <Image
      src={logo} // local fallback
      alt="Default cover"
      width={640}
      height={360}
      className="w-full md:w-1/2 object-cover"
    />
  )}

  <div className="pl-0 pt-4 md:pt-0 md:pl-4 flex flex-col justify-between md:w-1/2">
    <div>
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-600 mt-2">{post.description}</p>
    </div>

    <Link
      className="mt-4 hover:text-red-600"
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read more →
    </Link>
  </div>
</article>
  );
};

export default PostItem;
