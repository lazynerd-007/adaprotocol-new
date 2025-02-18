import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#1a1625',
        color: '#ffffff',
      },
      h1: {
        color: '#ffffff',
        fontWeight: '700'
      },
      h2: {
        color: '#ffffff',
        fontWeight: '600'
      },
      h3: {
        color: '#f0f0f0',
        fontWeight: '500'
      },
      p: {
        color: '#e0e0e0'
      },
      '.project-card': {
        color: '#ffffff'
      },
      '.news-card': {
        color: '#ffffff'
      }
    },
  },
});

export default theme;