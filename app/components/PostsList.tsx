'use client';

import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
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
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((allPosts) => {
        const published = (allPosts ?? []).filter((p) => p.published);
        setPostsList(isHome ? published.slice(0, 3) : published);
      })
      .catch(() => setPostsList([]))
      .finally(() => setLoading(false));
  }, [isHome]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress color="primary" />
      </Box>
    );
  if (postsList.length === 0)
    return (
      <Typography textAlign="center" color="text.secondary" py={4}>
        No posts available at the moment.
      </Typography>
    );

  return (
    <Grid container spacing={4}>
      {postsList.map((post) => (
        <Grid key={post.id} size={{ xs: 12, md: 6, lg: 4 }}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsList;
