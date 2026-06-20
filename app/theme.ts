import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffb703', dark: '#e5a503', contrastText: '#000000' },
    secondary: { main: '#2ec4b6' },
    background: { default: '#16213e', paper: '#0f3460' },
    text: { primary: '#F8FAFC', secondary: '#94A3B8' },
    divider: 'rgba(15, 52, 96, 0.5)',
  },
  typography: {
    fontFamily: '"Inter", "Sora", system-ui, sans-serif',
    h1: { fontWeight: 800, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    h2: { fontWeight: 700, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    h3: { fontWeight: 700, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    h4: { fontWeight: 700, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    h5: { fontWeight: 600, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    h6: { fontWeight: 600, fontFamily: '"Sora", sans-serif', color: '#ffb703' },
    overline: { letterSpacing: '2px', fontWeight: 500, fontFamily: '"Inter", sans-serif' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { '::selection': { backgroundColor: 'rgba(255, 183, 3, 0.3)', color: '#000000' } },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(15, 52, 96, 0.3)',
          backgroundImage: 'none',
          backgroundColor: '#0f3460',
        },
      },
    },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none', backgroundColor: 'rgba(22, 33, 62, 0.8)' } } },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 8, padding: '10px 24px' }, containedPrimary: { color: '#000000' } },
    },
    MuiTextField: {
      styleOverrides: { root: { '& .MuiOutlinedInput-root': { borderRadius: 12, backgroundColor: '#16213e' } } },
    },
  },
});
