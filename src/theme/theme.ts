import { createTheme } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    xxs: true;
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    xl2: true;
    xl3: true;
    xl4: true;
    xl5: true;
    xl6: true;
    xl7: true;
    xl8: true;
    xl9: true;
  }
}

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#a0a19d',
    },
  },
  typography: {
    xxs: {
      fontSize: '8px',
    },
    xs: {
      fontSize: '12px',
    },
    sm: {
      fontSize: '14px',
    },
    base: {
      fontSize: '16px',
    },
    lg: {
      fontSize: '18px',
    },
    xl: {
      fontSize: '20px',
    },
    xl2: {
      fontSize: '24px',
    },
    xl3: {
      fontSize: '30px',
    },
    xl4: {
      fontSize: '36px',
    },
    xl5: {
      fontSize: '48px',
    },
    xl6: {
      fontSize: '60px',
    },
    xl7: {
      fontSize: '72px',
    },
    xl8: {
      fontSize: '96px',
    },
    xl9: {
      fontSize: '128px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

export default theme;
