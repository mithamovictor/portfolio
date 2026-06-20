'use client';

import { FC, useState } from 'react';
import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from '@/app/components/Navigation';

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(22, 33, 62, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(15, 52, 96, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}
        >
          <Link
            component={NextLink}
            href="/"
            underline="none"
            color="inherit"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Tangerine', cursive",
                fontWeight: 700,
                color: 'primary.main',
                fontSize: { xs: '2rem', sm: '2.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '1px',
              }}
            >
              Mithamo Victor
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navigation />
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' }, ml: 2, bgcolor: 'rgba(148, 163, 184, 0.1)' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: 280,
                bgcolor: 'background.default',
                backgroundImage: 'none',
                borderLeft: '1px solid rgba(255, 183, 3, 0.15)',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <IconButton onClick={toggleDrawer(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Navigation direction="column" onLinkClick={() => setIsDrawerOpen(false)} />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
