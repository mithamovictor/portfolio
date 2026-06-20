'use client';

import { JSX } from 'react';
import NextLink from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Hero from '@/app/components/Hero';
import Stats from '@/app/components/Stats';
import Services from '@/app/components/Services';
import PortfolioList from '@/app/components/PortfolioList';
import PostsList from '@/app/components/PostsList';
import SectionHeading from '@/app/components/SectionHeading';

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Box component="section" py={{ xs: 10, sm: 15 }} sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <SectionHeading title="Portfolio" subtitle="Selected Projects" />
          <PortfolioList isHome={true} />
          <Stack alignItems="flex-start" mt={6}>
            <Button
              component={NextLink}
              href="/portfolio"
              variant="text"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                px: 0,
                '&:hover': { background: 'transparent', textDecoration: 'underline' },
              }}
            >
              View all projects
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box component="section" py={{ xs: 10, sm: 15 }} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeading title="Blog" subtitle="Latest Articles" />
          <PostsList isHome={true} />
          <Stack alignItems="flex-start" mt={6}>
            <Button
              component={NextLink}
              href="/posts"
              variant="text"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                px: 0,
                '&:hover': { background: 'transparent', textDecoration: 'underline' },
              }}
            >
              Read all posts
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
