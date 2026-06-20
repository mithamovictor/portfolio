import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SectionHeading: FC<{ title: string; subtitle?: string; children?: ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <Stack spacing={2} alignItems="flex-start" sx={{ mb: { xs: 6, sm: 8 } }}>
    <Typography variant="overline" color="primary.main">
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="h2"
        sx={{
          maxWidth: 600,
          fontSize: { xs: '2rem', sm: '2.5rem' },
          letterSpacing: '-1px',
        }}
      >
        {subtitle}
      </Typography>
    )}
    {children}
  </Stack>
);

export default SectionHeading;
