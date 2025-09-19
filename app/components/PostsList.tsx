'use client';

import { FC, useEffect, useState } from 'react';
import PostItem from '@/app/components/PostItem';
import { fetchPosts } from '@/app/actions/ContactFormAction';

export interface DevToUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
}

export interface DevToArticle {
  type_of: 'article';
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string; // ISO date string
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string; // ISO date string
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string | null;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: DevToUser;
}

const PostsList: FC<{ isHome: boolean }> = ({ isHome }) => {
  const [postsList, setPostsList] = useState<DevToArticle[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = (await fetchPosts()) ?? [];
        const publishedPosts = allPosts.filter((post) => post.published);

        setPostsList(isHome ? publishedPosts.slice(0, 4) : publishedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
        setPostsList([]);
      }
    };

    loadPosts();
  }, [isHome]);

  return (
    <div className={'grid grid-cols-1 gap-4 items-start justify-between'}>
      {postsList.map((post: DevToArticle) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
