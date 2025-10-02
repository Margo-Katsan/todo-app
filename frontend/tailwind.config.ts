import daisyui from 'daisyui';
import tailwindcssRetina from 'tailwindcss-retina';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            ...daisyui.themes['light'],
          },
        },
        {
          dark: {
            ...daisyui.themes['dark'],
          },
        },
        {
          retro: {
            ...daisyui.themes['retro'],
          },
        },
        {
          valentine: {
            ...daisyui.themes['valentine'],
          },
        },
      ],
      darkTheme: 'dark',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [daisyui, tailwindcssRetina],
};
