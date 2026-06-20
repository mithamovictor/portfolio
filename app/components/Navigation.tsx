'use client';

import { FC } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/posts', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

interface NavigationProps {
  direction?: 'row' | 'column';
  onLinkClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ direction = 'row', onLinkClick }) => {
  const pathname = usePathname();
  const isRow = direction === 'row';

  return (
    <Box component="nav">
      <Stack
        direction={direction}
        flexWrap={isRow ? 'nowrap' : 'wrap'}
        justifyContent={isRow ? 'center' : 'flex-start'}
        spacing={isRow ? { xs: 0, sm: 1 } : 2}
        sx={
          isRow
            ? {
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }
            : { px: 2, py: 4 }
        }
      >
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              component={NextLink}
              href={href}
              underline="none"
              onClick={onLinkClick}
              sx={{
                position: 'relative',
                px: isRow ? { xs: 1.5, sm: 2 } : 0,
                py: 1,
                fontWeight: 500,
                color: isActive ? 'primary.main' : 'text.secondary',
                whiteSpace: 'nowrap',
                '&:hover': { color: isActive ? 'primary.main' : 'text.primary' },
                '&::after':
                  isActive && isRow
                    ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: { xs: 8, sm: 12 },
                        right: { xs: 8, sm: 12 },
                        height: 2,
                        bgcolor: 'primary.main',
                      }
                    : undefined,
                borderLeft: isActive && !isRow ? 3 : 0,
                borderColor: 'primary.main',
                pl: isActive && !isRow ? 2 : 0,
              }}
            >
              {label}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Navigation;
