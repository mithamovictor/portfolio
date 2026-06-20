import { FC } from 'react';
import Box from '@mui/material/Box';

const HeroVisual: FC = () => (
  <Box sx={{ position: 'relative', width: '100%', maxWidth: 448 }}>
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        bgcolor: 'rgba(79, 209, 197, 0.1)',
        filter: 'blur(48px)',
      }}
    />
    <Box
      component="svg"
      viewBox="0 0 400 480"
      aria-hidden="true"
      sx={{
        width: '100%',
        animation: 'float 4s ease-in-out infinite',
        '@keyframes float': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      }}
    >
      <defs>
        <linearGradient id="tealGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38b2ac" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="rimLight" cx="80%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4fd1c5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="240" r="160" fill="url(#rimLight)" />
      <ellipse cx="200" cy="380" rx="90" ry="20" fill="#1a1a1a" />
      <path d="M140 380 L140 280 Q140 200 200 200 Q260 200 260 280 L260 380 Z" fill="#2a2a2a" />
      <path d="M155 280 L155 220 Q155 170 200 170 Q245 170 245 220 L245 280 Z" fill="#e8e8e8" />
      <rect x="168" y="220" width="8" height="100" rx="4" fill="#c0392b" />
      <rect x="220" y="220" width="8" height="100" rx="4" fill="#c0392b" />
      <circle cx="200" cy="140" r="55" fill="#f5d0a9" />
      <path d="M148 130 Q145 80 200 75 Q255 80 252 130 Q250 110 200 105 Q150 110 148 130" fill="#6b3a2a" />
      <ellipse cx="180" cy="138" rx="10" ry="12" fill="white" />
      <ellipse cx="220" cy="138" rx="10" ry="12" fill="white" />
      <circle cx="182" cy="140" r="6" fill="#2d3436" />
      <circle cx="222" cy="140" r="6" fill="#2d3436" />
      <path d="M185 160 Q200 172 215 160" stroke="#2d3436" strokeWidth="3" fill="none" />
      <g transform="translate(270, 250) rotate(15)">
        <rect x="0" y="0" width="60" height="80" rx="4" fill="white" stroke="#4fd1c5" strokeWidth="2" />
      </g>
      <path d="M95 260 L75 220 L90 215 L100 245 Z" fill="#f5d0a9" />
      <text x="60" y="100" fill="url(#tealGlow)" fontSize="36" fontFamily="monospace" fontWeight="bold">
        {'{'}
      </text>
      <text x="310" y="400" fill="url(#tealGlow)" fontSize="36" fontFamily="monospace" fontWeight="bold">
        {'}'}
      </text>
    </Box>
  </Box>
);

export default HeroVisual;
