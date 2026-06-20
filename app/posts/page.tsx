import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PostsList from '@/app/components/PostsList';
import SectionHeading from '@/app/components/SectionHeading';

const Posts: FC = () => (
  <Box py={{ xs: 6, sm: 8 }}>
    <Container maxWidth="lg">
      <SectionHeading title="Posts" subtitle="Articles and tutorials I've published" />
      <PostsList isHome={false} />
    </Container>
  </Box>
);

export default Posts;
