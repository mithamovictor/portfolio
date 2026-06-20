'use client';

import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: FC<StatItemProps> = ({ value, label }) => (
  <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        color: '#ffb703',
        fontSize: { xs: '3rem', md: '4.5rem' },
        lineHeight: 1,
        mb: 1,
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="overline"
      sx={{
        color: 'text.secondary',
        opacity: 0.8,
      }}
    >
      {label}
    </Typography>
  </Stack>
);

const Stats: FC = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '6+', label: 'Years of Experience' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(15, 52, 96, 0.3)',
        bgcolor: '#1a1a2e',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(46, 196, 182, 0.2), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} justifyContent="space-between">
          {stats.map((stat, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  pl: { md: index === 0 ? 0 : 4 },
                  borderLeft: { md: index === 0 ? 'none' : '1px solid rgba(15, 52, 96, 0.5)' },
                }}
              >
                <StatItem value={stat.value} label={stat.label} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
