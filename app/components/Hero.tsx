'use client';

import { FC } from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Socials from '@/app/components/Socials';
import HeroVisual from '@/app/components/HeroVisual';

const Hero: FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, sm: 15 }, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={4}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  display: 'block',
                }}
              >
                FULL-STACK SOFTWARE ENGINEER
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4.5rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-2px',
                  color: '#2ec4b6',
                }}
              >
                Enterprise-grade
                <br />
                <Box component="span" sx={{ color: '#ffb703' }}>
                  Java backends
                </Box>
                ,<br />
                modern React frontends.
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: '1.125rem', maxWidth: 540, lineHeight: 1.7 }}>
                Hi, I&apos;m{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Victor Mithamo
                </Box>
                . I build reliable, scalable business applications with 8+ years of experience in regulated,
                high-security financial environments.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} pt={2}>
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(255, 183, 3, 0.3)',
                  }}
                >
                  Book Consultation
                </Button>
                <Button
                  component={NextLink}
                  href="/portfolio"
                  variant="outlined"
                  size="large"
                  sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  View Work
                </Button>
              </Stack>
              <Box pt={4}>
                <Socials />
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' }, position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(255, 183, 3, 0.1) 0%, transparent 70%)',
                  zIndex: -1,
                }}
              />
              <HeroVisual />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
