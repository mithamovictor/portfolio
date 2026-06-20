import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PortfolioList from '@/app/components/PortfolioList';
import SectionHeading from '@/app/components/SectionHeading';

const PortfolioPage: FC = () => (
  <Box py={{ xs: 6, sm: 8 }}>
    <Container maxWidth="lg">
      <SectionHeading title="Portfolio" subtitle="A collection of projects I've built over the years" />
      <PortfolioList isHome={false} />
    </Container>
  </Box>
);

export default PortfolioPage;
