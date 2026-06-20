import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const Socials: FC = () => (
  <Stack direction="row" spacing={1.5}>
    <IconButton
      component="a"
      href="https://github.com/mithamovictor"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      sx={{ border: 1, borderColor: 'divider', color: 'primary.main' }}
    >
      <GitHubIcon fontSize="small" />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.linkedin.com/in/mithamovictor/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      sx={{ border: 1, borderColor: 'divider', color: 'primary.main' }}
    >
      <LinkedInIcon fontSize="small" />
    </IconButton>
  </Stack>
);

export default Socials;
