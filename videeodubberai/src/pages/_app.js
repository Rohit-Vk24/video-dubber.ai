import { MantineProvider } from '@mantine/core';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
