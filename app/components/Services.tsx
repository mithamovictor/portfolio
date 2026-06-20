'use client';

import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SectionHeading from '@/app/components/SectionHeading';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SecurityIcon from '@mui/icons-material/Security';

const services = [
  {
    title: 'Custom Web App Development',
    description:
      'High-performance, responsive web applications built with React and Next.js, tailored to your business needs.',
    icon: <CodeIcon fontSize="large" color="primary" />,
  },
  {
    title: 'API & Backend Engineering',
    description:
      'Scalable, secure RESTful and GraphQL APIs built with Java and Spring Boot, designed for reliability and speed.',
    icon: <StorageIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Legacy System Modernization',
    description:
      'Updating outdated systems with modern technology stacks to improve performance, security, and maintainability.',
    icon: <AutorenewIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Cloud Migration & Strategy',
    description:
      'Moving your infrastructure to the cloud (AWS/Azure/GCP) for better scalability, availability, and cost-efficiency.',
    icon: <CloudUploadIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Code Audits & Consulting',
    description:
      'Expert review of your codebase for security, performance, and best practices, providing actionable recommendations.',
    icon: <SecurityIcon fontSize="large" color="primary" />,
  },
];

const Services: FC = () => {
  return (
    <Box component="section" py={{ xs: 10, sm: 15 }} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading title="Services" subtitle="Professional Solutions for Complex Problems" />
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>{service.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
