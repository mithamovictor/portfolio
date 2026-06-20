'use client';

import { FC, useState, useMemo } from 'react';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// Tech Icons
import { FaJava, FaReact, FaNodeJs, FaPhp, FaLaravel, FaWordpress, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMysql, SiSocketdotio, SiJquery, SiJavascript } from 'react-icons/si';
import { MdVideoLibrary, MdCode } from 'react-icons/md';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { surfaceElevated } from '@/app/constants';

const techIconMap: Record<string, FC<never>> = {
  java: FaJava,
  'spring boot': SiSpringboot,
  react: FaReact,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  'node.js': FaNodeJs,
  'socket.io': SiSocketdotio,
  php: FaPhp,
  laravel: FaLaravel,
  javascript: FaJs,
  vanilla: SiJavascript,
  'html/css': FaHtml5,
  css: FaCss3Alt,
  css3: FaCss3Alt,
  html5: FaHtml5,
  wordpress: FaWordpress,
  'video editing': MdVideoLibrary,
  jquery: SiJquery,
};

const getTechIcon = (tech: string) => {
  const normalized = tech.toLowerCase().trim();
  for (const [key, icon] of Object.entries(techIconMap)) {
    if (normalized.includes(key)) return icon;
  }
  return MdCode;
};

const PortfolioItem: FC<{
  link: string;
  title: string;
  year: string;
  image: string | StaticImport;
  problem: string;
  solution: string;
  stack: string;
  outcome: string;
}> = ({ link, title, year, image, problem, solution, stack, outcome }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stackIcons = useMemo(() => {
    return stack.split(',').map((s) => ({
      name: s.trim(),
      Icon: getTechIcon(s) as FC<{ sx?: never }>,
    }));
  }, [stack]);

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          cursor: 'pointer',
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          aspectRatio: '16/10',
          bgcolor: '#16213e',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.02)',
            '& .overlay': {
              opacity: 1,
            },
            '& .project-image': {
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="project-image"
            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          />
        </Box>

        {/* Overlay on hover */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(26, 26, 46, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            opacity: 0,
            transition: 'opacity 0.3s ease',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>
            {year}
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: 50,
              textTransform: 'none',
              px: 3,
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            borderRadius: 6,
            overflow: 'hidden',
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.secondary',
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  height: { xs: 240, md: '100%' },
                  minHeight: { md: 400 },
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: surfaceElevated,
                  p: 4,
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-1px', mb: 1 }}
                  >
                    {title}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}
                    >
                      {year}
                    </Typography>
                    <Box sx={{ width: 1, height: 20, borderLeft: '1px solid rgba(148, 163, 184, 0.3)' }} />
                    <Stack direction="row" spacing={1.5}>
                      {stackIcons.map(({ name, Icon }, index) => (
                        <Tooltip key={index} title={name} arrow>
                          <Icon sx={{ fontSize: 20, color: 'primary.main', opacity: 0.8, '&:hover': { opacity: 1 } }} />
                        </Tooltip>
                      ))}
                    </Stack>
                  </Stack>

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'primary.main', fontWeight: 700, display: 'block', mb: 0.5 }}
                      >
                        The Problem
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {problem}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'primary.main', fontWeight: 700, display: 'block', mb: 0.5 }}
                      >
                        The Solution
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {solution}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: 'primary.main', fontWeight: 700, display: 'block', mb: 0.5 }}
                      >
                        Key Outcome
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {outcome}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                {link && link !== '#' && (
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      component="a"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      fullWidth
                      sx={{ py: 1.5, fontWeight: 700 }}
                    >
                      Launch Project
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioItem;
