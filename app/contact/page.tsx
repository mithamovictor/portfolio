'use client';

import { FC, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { submitContactForm } from '@/app/actions/ContactFormAction';
import SectionHeading from '@/app/components/SectionHeading';

const ContactFormSubmitButton: FC = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={pending}
      startIcon={pending ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
    >
      {pending ? 'Sending...' : 'Send'}
    </Button>
  );
};

const Contact: FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <Box py={{ xs: 6, sm: 8 }}>
      <Container maxWidth="md">
        <SectionHeading title="Contact" subtitle="Book a consultation or send a message" />
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 4, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Free Consultation
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
                Looking to discuss a new project, legacy system modernization, or a code audit? Book a free 30-minute
                consultation directly in my calendar.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<EventAvailableIcon />}
                href="https://calendly.com/hello-mithamo/30min"
                target="_blank"
                sx={{ py: 2, fontWeight: 700 }}
              >
                Schedule on Calendly
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              ref={ref}
              action={async (formData) => {
                await submitContactForm(formData);
                ref.current?.reset();
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth name="firstName" label="First Name" required />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth name="lastName" label="Last Name" required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth name="email" label="Email" type="email" required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth name="message" label="Message" multiline rows={6} required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <ContactFormSubmitButton />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
