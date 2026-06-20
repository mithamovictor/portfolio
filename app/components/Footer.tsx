import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BuyMeACoffeeButton from '@/app/components/BuyMeACoffeeButton';

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(15, 52, 96, 0.3)', bgcolor: '#16213e', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Tangerine', cursive",
                fontWeight: 700,
                color: 'primary.main',
                mb: 2,
                fontSize: '2.5rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '1px',
              }}
            >
              Mithamo Victor
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, lineHeight: 1.7 }}>
              Enterprise-grade Java backends, modern React frontends. Building reliable, scalable business applications.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' } }}
          >
            <BuyMeACoffeeButton />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              &copy; {year} Victor Mithamo. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
